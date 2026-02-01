import { Payload } from 'payload'
import { Building, Flat, Floor } from '@/payload-types'
import {
  NormalizedBuilding,
  NormalizedFloor,
  NormalizedFlat,
  BatchResult,
  ExistenceCheckResult,
  MigrateError,
} from '@/types/migrate'
import { sanitizeRealpadFlatData } from '@/utils/sanitizeRealpadFlat'

const BATCH_SIZE = 50 // Optimized batch size for better performance

export class MigrateService {
  constructor(private payload: Payload) {}

  /**
   * Bulk check existence of items in all collections
   * This eliminates N+1 query problems by checking all IDs at once
   */
  async checkExistence(
    buildingIds: string[],
    floorIds: string[],
    flatIds: string[],
  ): Promise<ExistenceCheckResult> {
    const [buildings, floors, flats] = await Promise.all([
      // Check existing buildings
      buildingIds.length > 0
        ? this.payload.find({
            collection: 'buildings',
            where: {
              realpadid: { in: buildingIds },
            },
            limit: buildingIds.length,
            select: { realpadid: true },
          })
        : { docs: [] },

      // Check existing floors
      floorIds.length > 0
        ? this.payload.find({
            collection: 'floors',
            where: {
              realpadid: { in: floorIds },
            },
            limit: floorIds.length,
            select: { realpadid: true },
          })
        : { docs: [] },

      // Check existing flats
      flatIds.length > 0
        ? this.payload.find({
            collection: 'flats',
            where: {
              realpadid: { in: flatIds },
            },
            limit: flatIds.length,
            select: { realpadid: true },
          })
        : { docs: [] },
    ])

    return {
      buildings: new Set(
        buildings.docs.map((b) => b.realpadid).filter((id): id is string => Boolean(id)),
      ),
      floors: new Set(
        floors.docs.map((f) => f.realpadid).filter((id): id is string => Boolean(id)),
      ),
      flats: new Set(flats.docs.map((f) => f.realpadid).filter((id): id is string => Boolean(id))),
    }
  }

  /**
   * Batch create buildings with error handling
   */
  async createBuildingsBatch(
    buildings: NormalizedBuilding[],
    existingIds: Set<string>,
  ): Promise<BatchResult<Building>> {
    const result: BatchResult<Building> = {
      created: [],
      existing: [],
      errors: [],
    }

    // Filter out existing buildings
    const toCreate = buildings.filter((b) => !existingIds.has(b.realpadid))

    if (toCreate.length === 0) {
      return result
    }

    // Process in batches to avoid overwhelming the database
    for (let i = 0; i < toCreate.length; i += BATCH_SIZE) {
      const batch = toCreate.slice(i, i + BATCH_SIZE)

      try {
        // Use Promise.allSettled to handle individual failures
        const createPromises = batch.map(async (buildingData) => {
          try {
            // Create building in Czech locale (default)
            const createdBuilding = await this.payload.create({
              collection: 'buildings',
              data: buildingData,
            })

            // Update English locale with same title
            await this.payload.update({
              collection: 'buildings',
              id: createdBuilding.id,
              locale: 'en',
              data: {
                title: createdBuilding?.title,
              },
            })

            return createdBuilding
          } catch (error) {
            return { error, data: buildingData }
          }
        })

        const results = await Promise.allSettled(createPromises)

        results.forEach((promiseResult, index) => {
          if (promiseResult.status === 'fulfilled') {
            if (
              promiseResult.value &&
              typeof promiseResult.value === 'object' &&
              'error' in promiseResult.value
            ) {
              // Individual creation failed
              this.addError(
                result.errors,
                promiseResult.value.error,
                'building',
                batch[index].realpadid,
                batch[index],
              )
            } else {
              result.created.push(promiseResult.value as Building)
            }
          } else {
            // Promise rejected
            this.addError(
              result.errors,
              promiseResult.reason,
              'building',
              batch[index].realpadid,
              batch[index],
            )
          }
        })
      } catch (error) {
        // Batch failed entirely
        batch.forEach((building) => {
          this.addError(result.errors, error, 'building', building.realpadid, building)
        })
      }
    }

    return result
  }

  /**
   * Batch create floors with building reference mapping
   */
  async createFloorsBatch(
    floors: NormalizedFloor[],
    existingIds: Set<string>,
    buildingMap: Map<string, string>, // realpadid -> internal id
  ): Promise<BatchResult<Floor>> {
    const result: BatchResult<Floor> = {
      created: [],
      existing: [],
      errors: [],
    }

    const toCreate = floors.filter((f) => !existingIds.has(f.realpadid))

    if (toCreate.length === 0) {
      return result
    }

    for (let i = 0; i < toCreate.length; i += BATCH_SIZE) {
      const batch = toCreate.slice(i, i + BATCH_SIZE)

      try {
        const createPromises = batch.map(async (floorData) => {
          try {
            // Map building reference
            let buildingId = buildingMap.get(floorData.building)

            // If building reference not found, try to find it in database
            if (!buildingId) {
              const buildingResult = await this.payload.find({
                collection: 'buildings',
                where: { realpadid: { equals: floorData.building } },
                limit: 1,
              })

              if (buildingResult.docs.length > 0) {
                buildingId = String(buildingResult.docs[0].id)
                // Add to map for future use
                buildingMap.set(floorData.building, buildingId)
              } else {
                throw new Error(`Building not found for floor ${floorData.realpadid}`)
              }
            }

            // Create floor in Czech locale (default)
            const createdFloor = await this.payload.create({
              collection: 'floors',
              data: {
                title: floorData.title,
                slug: floorData.title,
                project: Number(floorData.project),
                realpadid: floorData.realpadid,
                building: Number(buildingId),
                floorNo: Number(floorData.floorNo),
                realpadFloor: floorData.realpadFloor,
              },
            })

            // Update English locale with same title
            await this.payload.update({
              collection: 'floors',
              id: createdFloor.id,
              locale: 'en',
              data: {
                title: createdFloor?.title,
              },
            })

            return createdFloor
          } catch (error) {
            return { error, data: floorData }
          }
        })

        const results = await Promise.allSettled(createPromises)

        results.forEach((promiseResult, index) => {
          if (promiseResult.status === 'fulfilled') {
            if (
              promiseResult.value &&
              typeof promiseResult.value === 'object' &&
              'error' in promiseResult.value
            ) {
              this.addError(
                result.errors,
                promiseResult.value.error,
                'floor',
                batch[index].realpadid,
                batch[index],
              )
            } else {
              result.created.push(promiseResult.value as Floor)
            }
          } else {
            this.addError(
              result.errors,
              promiseResult.reason,
              'floor',
              batch[index].realpadid,
              batch[index],
            )
          }
        })
      } catch (error) {
        batch.forEach((floor) => {
          this.addError(result.errors, error, 'floor', floor.realpadid, floor)
        })
      }
    }

    return result
  }

  /**
   * Batch create flats with building and floor reference mapping
   */
  async createFlatsBatch(
    flats: NormalizedFlat[],
    existingIds: Set<string>,
    buildingMap: Map<string, string>,
    floorMap: Map<string, string>,
  ): Promise<BatchResult<Flat>> {
    const result: BatchResult<Flat> = {
      created: [],
      existing: [],
      errors: [],
    }

    const toCreate = flats.filter((f) => !existingIds.has(f.realpadid))

    if (toCreate.length === 0) {
      return result
    }

    for (let i = 0; i < toCreate.length; i += BATCH_SIZE) {
      const batch = toCreate.slice(i, i + BATCH_SIZE)

      try {
        const createPromises = batch.map(async (flatData) => {
          try {
            let buildingId = buildingMap.get(flatData.building)
            let floorId = floorMap.get(flatData.floor)

            // If building reference not found, try to find it in database
            if (!buildingId) {
              const buildingResult = await this.payload.find({
                collection: 'buildings',
                where: { realpadid: { equals: flatData.building } },
                limit: 1,
              })

              if (buildingResult.docs.length > 0) {
                buildingId = String(buildingResult.docs[0].id)
                console.log('BUILDING ID', buildingId)
                // Add to map for future use
                buildingMap.set(flatData.building, buildingId)
              } else {
                throw new Error(`Building not found for flat ${flatData.realpadid}`)
              }
            }

            // If floor reference not found, try to find it in database
            if (!floorId) {
              const floorResult = await this.payload.find({
                collection: 'floors',
                where: { realpadid: { equals: flatData.floor } },
                limit: 1,
              })

              if (floorResult.docs.length > 0) {
                floorId = String(floorResult.docs[0].id)
                // Add to map for future use
                floorMap.set(flatData.floor, floorId)
              } else {
                throw new Error(`Floor not found for flat ${flatData.realpadid}`)
              }
            }

            // Sanitize RealPad group data and slug
            const sanitizedRealpadFlat = sanitizeRealpadFlatData(flatData.realpadFlat)
            const safeSlug =
              flatData.slug && String(flatData.slug).trim().length > 0
                ? String(flatData.slug)
                : String(flatData.title)
            // Create flat in Czech locale (default)
            const createdFlat = await this.payload.create({
              collection: 'flats',
              data: {
                ...(sanitizedRealpadFlat ? { realpadFlat: sanitizedRealpadFlat } : {}),
                title: flatData.title,
                slug: safeSlug,
                project: Number(flatData.project),
                building: Number(buildingId),
                floor: Number(floorId),
                realpadid: flatData.realpadid,
              },
            })

            // Update English locale with same title
            await this.payload.update({
              collection: 'flats',
              id: createdFlat.id,
              locale: 'en',
              data: {
                title: createdFlat?.title,
              },
            })

            return createdFlat
            return flatData
          } catch (error) {
            return { error, data: flatData }
          }
        })

        const results = await Promise.allSettled(createPromises)

        results.forEach((promiseResult, index) => {
          if (promiseResult.status === 'fulfilled') {
            if (
              promiseResult.value &&
              typeof promiseResult.value === 'object' &&
              'error' in promiseResult.value
            ) {
              this.addError(
                result.errors,
                promiseResult.value.error,
                'flat',
                batch[index].realpadid,
                batch[index],
              )
            } else {
              result.created.push(promiseResult.value as unknown as Flat)
            }
          } else {
            this.addError(
              result.errors,
              promiseResult.reason,
              'flat',
              batch[index].realpadid,
              batch[index],
            )
          }
        })
      } catch (error) {
        batch.forEach((flat) => {
          this.addError(result.errors, error, 'flat', flat.realpadid, flat)
        })
      }
    }

    return result
  }

  /**
   * Create reference mapping from realpad IDs to internal IDs
   */
  createReferenceMap<T extends { realpadid: string | null | undefined; id: string }>(
    items: T[],
  ): Map<string, string> {
    return new Map(
      items
        .filter((item): item is T & { realpadid: string } => Boolean(item.realpadid))
        .map((item) => [item.realpadid, item.id]),
    )
  }

  /**
   * Helper method to add errors with consistent format
   */
  private addError(
    errors: MigrateError[],
    error: any,
    type: 'building' | 'floor' | 'flat',
    itemId?: string,
    data?: any,
  ): void {
    errors.push({
      type,
      itemId,
      error: error instanceof Error ? error.message : String(error),
      data,
    })
  }

  /**
   * Batch update buildings with error handling
   */
  async updateBuildingsBatch(
    buildings: NormalizedBuilding[],
    existingIds: Set<string>,
  ): Promise<BatchResult<Building>> {
    const result: BatchResult<Building> = {
      created: [],
      existing: [],
      errors: [],
    }

    // Only update existing buildings
    const toUpdate = buildings.filter((b) => existingIds.has(b.realpadid))

    if (toUpdate.length === 0) {
      return result
    }

    // Process each building individually for updates
    for (const buildingData of toUpdate) {
      try {
        // Find the existing building
        const existingBuildingResult = await this.payload.find({
          collection: 'buildings',
          where: { realpadid: { equals: buildingData.realpadid } },
          limit: 1,
        })

        if (existingBuildingResult.docs.length === 0) {
          this.addError(
            result.errors,
            new Error(`Building with realpadid ${buildingData.realpadid} not found`),
            'building',
            buildingData.realpadid,
            buildingData,
          )
          continue
        }

        const existingBuilding = existingBuildingResult.docs[0]
        // Update Czech locale (default)
        const updatedBuilding = await this.payload.update({
          collection: 'buildings',
          id: existingBuilding.id,
          data: {
            title: buildingData.title,
            project: Number(buildingData.project),
          },
        })

        // Update English locale with same title
        await this.payload.update({
          collection: 'buildings',
          id: existingBuilding.id,
          locale: 'en',
          data: {
            title: buildingData.title,
          },
        })

        result.existing.push(updatedBuilding)
      } catch (error) {
        this.addError(result.errors, error, 'building', buildingData.realpadid, buildingData)
      }
    }

    return result
  }

  /**
   * Batch update floors with building reference mapping
   */
  async updateFloorsBatch(
    floors: NormalizedFloor[],
    existingIds: Set<string>,
    buildingMap: Map<string, string>,
  ): Promise<BatchResult<Floor>> {
    const result: BatchResult<Floor> = {
      created: [],
      existing: [],
      errors: [],
    }

    const toUpdate = floors.filter((f) => existingIds.has(f.realpadid))

    if (toUpdate.length === 0) {
      return result
    }

    // Get existing floors with their internal IDs
    const existingFloors = await this.payload.find({
      collection: 'floors',
      where: {
        realpadid: { in: toUpdate.map((f) => f.realpadid) },
      },
      limit: toUpdate.length,
    })

    const floorIdMap = new Map<string, string>(
      existingFloors.docs
        .filter((f) => f.realpadid && f.id)
        .map((f) => [f.realpadid as string, f.id as unknown as string]),
    )

    for (let i = 0; i < toUpdate.length; i += BATCH_SIZE) {
      const batch = toUpdate.slice(i, i + BATCH_SIZE)

      try {
        const updatePromises = batch.map(async (floorData) => {
          try {
            const internalId = floorIdMap.get(floorData.realpadid)
            const buildingId = buildingMap.get(floorData.building)

            if (!internalId) {
              throw new Error(`Floor with realpadid ${floorData.realpadid} not found`)
            }
            if (!buildingId) {
              throw new Error(`Building not found for floor ${floorData.realpadid}`)
            }

            // Update Czech locale (default)
            const updatedFloor = await this.payload.update({
              collection: 'floors',
              id: internalId,
              data: {
                title: floorData.title,
                project: Number(floorData.project),
                floorNo: floorData.floorNo,
                building: Number(buildingId),
                realpadFloor: floorData.realpadFloor,
              },
            })

            // Update English locale with same title
            await this.payload.update({
              collection: 'floors',
              id: internalId,
              locale: 'en',
              data: {
                title: floorData.title,
              },
            })

            return updatedFloor
          } catch (error) {
            return { error, data: floorData }
          }
        })

        const results = await Promise.allSettled(updatePromises)

        results.forEach((promiseResult, index) => {
          if (promiseResult.status === 'fulfilled') {
            if (
              promiseResult.value &&
              typeof promiseResult.value === 'object' &&
              'error' in promiseResult.value
            ) {
              this.addError(
                result.errors,
                promiseResult.value.error,
                'floor',
                batch[index].realpadid,
                batch[index],
              )
            } else {
              result.existing.push(promiseResult.value as Floor)
            }
          } else {
            this.addError(
              result.errors,
              promiseResult.reason,
              'floor',
              batch[index].realpadid,
              batch[index],
            )
          }
        })
      } catch (error) {
        batch.forEach((floor) => {
          this.addError(result.errors, error, 'floor', floor.realpadid, floor)
        })
      }
    }

    return result
  }

  /**
   * Batch update flats with building and floor reference mapping
   */
  async updateFlatsBatch(
    flats: NormalizedFlat[],
    existingIds: Set<string>,
    buildingMap: Map<string, string>,
    floorMap: Map<string, string>,
  ): Promise<BatchResult<Flat>> {
    const result: BatchResult<Flat> = {
      created: [],
      existing: [],
      errors: [],
    }

    const toUpdate = flats.filter((f) => existingIds.has(f.realpadid))

    if (toUpdate.length === 0) {
      return result
    }

    // Get existing flats with their internal IDs
    const existingFlats = await this.payload.find({
      collection: 'flats',
      where: {
        realpadid: { in: toUpdate.map((f) => f.realpadid) },
      },
      limit: toUpdate.length,
    })

    const flatIdMap = new Map<string, string>(
      existingFlats.docs
        .filter((f) => f.realpadid && f.id)
        .map((f) => [f.realpadid as string, f.id as unknown as string]),
    )

    for (let i = 0; i < toUpdate.length; i += BATCH_SIZE) {
      const batch = toUpdate.slice(i, i + BATCH_SIZE)

      try {
        const updatePromises = batch.map(async (flatData) => {
          try {
            const internalId = flatIdMap.get(flatData.realpadid)
            const buildingId = buildingMap.get(flatData.building)
            const floorId = floorMap.get(flatData.floor)

            if (!internalId) {
              throw new Error(`Flat with realpadid ${flatData.realpadid} not found`)
            }
            if (!buildingId || !floorId) {
              throw new Error(`References not found for flat ${flatData.realpadid}`)
            }

            // Update Czech locale (default)
            const sanitizedRealpadFlat = sanitizeRealpadFlatData(flatData.realpadFlat)
            const updatedFlat = await this.payload.update({
              collection: 'flats',
              id: internalId,
              data: {
                ...(sanitizedRealpadFlat ? { realpadFlat: sanitizedRealpadFlat } : {}),
                title: flatData.title,
                slug:
                  flatData.slug && String(flatData.slug).trim().length > 0
                    ? String(flatData.slug)
                    : String(flatData.title),
                project: Number(flatData.project),
                building: Number(buildingId),
                floor: Number(floorId),
              },
            })

            // Update English locale with same title
            await this.payload.update({
              collection: 'flats',
              id: internalId,
              locale: 'en',
              data: {
                title: flatData.title,
              },
            })

            return updatedFlat
          } catch (error) {
            return { error, data: flatData }
          }
        })

        const results = await Promise.allSettled(updatePromises)

        results.forEach((promiseResult, index) => {
          if (promiseResult.status === 'fulfilled') {
            if (
              promiseResult.value &&
              typeof promiseResult.value === 'object' &&
              'error' in promiseResult.value
            ) {
              this.addError(
                result.errors,
                promiseResult.value.error,
                'flat',
                batch[index].realpadid,
                batch[index],
              )
            } else {
              result.existing.push(promiseResult.value as Flat)
            }
          } else {
            this.addError(
              result.errors,
              promiseResult.reason,
              'flat',
              batch[index].realpadid,
              batch[index],
            )
          }
        })
      } catch (error) {
        batch.forEach((flat) => {
          this.addError(result.errors, error, 'flat', flat.realpadid, flat)
        })
      }
    }

    return result
  }

  /**
   * Get migration statistics
   */
  async getMigrationStats(projectId: number) {
    const [buildingsCount, floorsCount, flatsCount] = await Promise.all([
      this.payload.count({
        collection: 'buildings',
        where: { project: { equals: projectId } },
      }),
      this.payload.count({
        collection: 'floors',
        where: { project: { equals: projectId } },
      }),
      this.payload.count({
        collection: 'flats',
        where: { project: { equals: projectId } },
      }),
    ])

    return {
      buildings: buildingsCount.totalDocs,
      floors: floorsCount.totalDocs,
      flats: flatsCount.totalDocs,
    }
  }
}

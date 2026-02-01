'use client'
import { Flat, Project } from '@/payload-types'
import { FC } from 'react'
import './ProjectBlock.scss'
import Cookies from 'js-cookie'

export interface IProjectBlock extends Project {
  className?: string
  countFlats?: number
  allFlats?: Flat[]
}

const ProjectBlock: FC<IProjectBlock> = (props) => {
  const { name, countFlats, allFlats, id } = props

  const findFree = allFlats?.filter((flat) => flat.realpadFlat?.flat_status === '0')
  const findPreReservation = allFlats?.filter((flat) => flat.realpadFlat?.flat_status === '1')
  const findReserved = allFlats?.filter((flat) => flat.realpadFlat?.flat_status === '2')
  const findSold = allFlats?.filter((flat) => flat.realpadFlat?.flat_status === '3')
  const findNotForSale = allFlats?.filter((flat) => flat.realpadFlat?.flat_status === '4')
  const findDelayed = allFlats?.filter((flat) => flat.realpadFlat?.flat_status === '5')

  const handleSelectProject = (id: number) => {
    Cookies.set('activeProject', id.toString())
    Cookies.set('activeProjectName', name)
    location.reload()
  }
  return (
    <div className="projectBlock">
      <h3>{name}</h3>
      <div className="projectBlock__stats">
        <p>{countFlats} bytů</p>
        <p>{findFree?.length} volných bytů</p>
        <p>{findPreReservation?.length} předrezerací bytů</p>
        <p>{findReserved?.length} rezervovaných bytů</p>
        <p>{findSold?.length} prodaných bytů</p>
        <p>{findNotForSale?.length} neprodávaných bytů</p>
        <p>{findDelayed?.length} prodaných bytů</p>
      </div>
      <button type="button" onClick={() => handleSelectProject(id)}>
        Vybrat projekt
      </button>
    </div>
  )
}

export default ProjectBlock

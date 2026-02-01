import { Hero } from '@/blocks/Hero'
import { TextImage } from '@/blocks/TextImage'
import { Field } from 'payload'
import { TableCustom } from '../../blocks/TableCustom'
import { Project, Role } from '@/payload-types'
import { DrawEditor } from '@/blocks/DrawEditor'
import { InteractivePickerExtended } from '@/blocks/InteractivePickerExtended'
import { Content } from '@/blocks/Content'
import { Banner } from '@/blocks/Banner'
import { Contact } from '@/blocks/Contact'
import { Form } from '@/blocks/Form'
import { Features } from '@/blocks/Features'
import { GallerySlider } from '@/blocks/GallerySlider'
import { VisualPriceList } from '@/blocks/VisualPriceList'
import { FlatsSnippet } from '@/blocks/FlatsSnippet'
import { ImageContent } from '@/blocks/ImageContent'
import { ImagesGrid } from '@/blocks/ImagesGrid'
import { NewsSnippet } from '@/blocks/NewsSnippet'
import { Timeline } from '@/blocks/Timeline'
import { Prices } from '@/blocks/Prices'
import { SharedSection } from '@/blocks/SharedSection'
import { ImagePins } from '@/blocks/ImagePins'
import { BenefitsGrid } from '@/blocks/BenefitsGrid'
import { Numbers } from '@/blocks/Numbers'
import { HighlightedText } from '@/blocks/HighlightedText'
import { Map } from '@/blocks/Map'
import { OurProjects } from '@/blocks/OurProjects'
import { StepCards } from '@/blocks/StepCards'
import { MultiGridGallery } from '@/blocks/MultiGridGallery'
import { StickySlides } from '@/blocks/StickySlides'

export const SectionBuilderFour: Field = {
  name: 'sectionBuilderFour',
  type: 'blocks',
  label: 'Section builder',
  required: false,
  localized: true,
  admin: {
    condition: (data, siblingData, { user }) => {
      // const allowProject = user?.allowProject || []
      // const role = user?.role as Role
      // const roleAllowProject = role?.allowProject || []
      // const activeProject = data?.project
      // const find = [...allowProject, ...roleAllowProject]?.find((find) => {
      //   const project = find as Project
      //   return project?.id === activeProject
      // })
      // const findProject = find as Project
      // const findProjectLevel = findProject?.levelStoone
      // return findProjectLevel === 'levelstoone_4'

      const allowProject = user?.allowProject || []
      const role = user?.role as Role
      const roleAllowProject = role?.allowProject || []
      const activeProject = data?.project
      const arrayOfProjectsByRolesAndUsers = [...allowProject, ...roleAllowProject]
      const onlyChildByID = arrayOfProjectsByRolesAndUsers.filter((item, index, arr) => {
        if (!item || typeof item !== 'object') return false
        const project = item as Project
        if (!project?.id) return false
        return (
          arr.findIndex((el) => {
            if (!el || typeof el !== 'object') return false
            const elProject = el as Project
            return elProject?.id === project?.id
          }) === index
        )
      })
      const find = onlyChildByID?.find((find) => {
        if (!find || typeof find !== 'object') return false
        const project = find as Project
        return project?.id === activeProject
      })

      if (!find) {
        return false
      }

      const findProject = find as Project
      const findProjectLevel = findProject?.levelStoone
      return findProjectLevel === 'levelstoone_4'
    },
  },
  blocks: [
    Banner,
    BenefitsGrid,
    Contact,
    Content,
    DrawEditor,
    Features,
    Form,
    FlatsSnippet,
    GallerySlider,
    Hero,
    HighlightedText,
    ImageContent,
    ImagesGrid,
    ImagePins,
    Map,
    NewsSnippet,
    Numbers,
    Timeline,
    OurProjects,
    Prices,
    InteractivePickerExtended,
    VisualPriceList,
    StepCards,
    StickySlides,
    MultiGridGallery,
    TableCustom,
    TextImage,
    SharedSection,
  ], // přidej další bloky dle potřeby
}

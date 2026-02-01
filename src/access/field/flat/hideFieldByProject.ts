import { FieldAccess } from 'payload'

export const hideFieldByProject: FieldAccess = async (props) => {
  const { req, doc } = props

  const pay = req.payload
  const project = await pay.find({
    collection: 'projects',
    where: {
      id: doc?.project?.id,
    },
  })
  const projectPriceModule = project?.docs[0]?.projectPriceModule
  const priceHidden = projectPriceModule?.priceHidden
  return !priceHidden
}

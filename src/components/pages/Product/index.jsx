import { TagIcon } from '@primer/octicons-react'

const Product = () => {
  document.title = 'Product'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-Roboto">
        <TagIcon size={16} fill="darkgrey" />
        <span className="text-lg text-darkgrey font-bold">/ Product</span>
      </div>
    </>
  )
}

export default Product

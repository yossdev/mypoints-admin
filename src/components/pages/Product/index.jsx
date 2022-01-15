import { TagIcon } from '@primer/octicons-react'

const Product = () => {
  document.title = 'Product'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <TagIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Products</span>
      </div>
    </>
  )
}

export default Product

import { TagIcon } from '@primer/octicons-react'
import TableProduct from '../../UI/organisms/Products/TableProduct'

const Product = () => {
  document.title = 'Product'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <TagIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Products</span>
      </div>

      <div
        style={{
          marginTop: '30px',
          width: '80%',
          padding: '20px',
          float: 'right',
          border: 'red solid 1px',
        }}
      >
        <TableProduct />
      </div>
    </>
  )
}

export default Product

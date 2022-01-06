import SideBar from '../../UI/organisms/SideBar'
import AdminMenu from '../../UI/organisms/AdminMenu'

import { TagIcon } from '@primer/octicons-react'

import TableProduct from '../../UI/organisms/TableProduct'
import ButtonAddProduct from '../../UI/atoms/ButtonAddProduct'

const Product = () => {
  document.title = 'Product'

  return (
    <div className="h-screen bg-grey">
      <SideBar />
      <AdminMenu />
      <TableProduct />
      <ButtonAddProduct />
      <div className="ml-80 pt-3 font-Roboto">
        <TagIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Product</span> <br />
        <span className="text-md text-darkgrey font-bold">Product</span>
      </div>
    </div>
  )
}

export default Product

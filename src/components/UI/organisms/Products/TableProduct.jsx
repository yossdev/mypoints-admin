import { useState } from 'react'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import DelProduct from './DelProduct'

import gifts from '../../../../assets/gifts.svg'

const TableProduct = (props) => {
  const [editProduct, setEditProduct] = useState(false)
  const [addProduct, setAddProduct] = useState(false)
  const [delProduct, setDelProduct] = useState(false)

  return (
    <div className="font-roboto">
      <button
        onClick={() => setAddProduct(true)}
        className="mb-3 mr-4 border-2 bg-purple hover:bg-darkpurple text-sm text-white font-roboto p-3 rounded-md"
      >
        + Tambah Produk
      </button>

      <table className="w-full float-right shadow-lg font-roboto">
        <thead>
          <tr>
            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase"></th>

            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
              NAMA PRODUK
            </th>

            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
              POINTS
            </th>

            <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
              ACTIONS
            </th>
          </tr>
        </thead>

        <tbody>
          {props.data.products.map((product) => (
            <tr className="text-center">
              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                {props.data.products.img !== '' ? (
                  <img
                    alt="product"
                    src={product.img}
                    className="w-8 h-8 float-right"
                  />
                ) : (
                  <img
                    alt="product"
                    src={gifts}
                    className="w-8 h-8 float-right"
                  />
                )}
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {product.title}
                </p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {product.points}
                </p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <span
                  onClick={() => setEditProduct(true)}
                  className="font-semibold text-darkgrey hover:bg-lightpurple rounded-full cursor-pointer p-2 mr-4"
                >
                  Edit
                </span>
                <span
                  onClick={() => setDelProduct(true)}
                  className="font-semibold text-red hover:bg-lightpurple rounded-full cursor-pointer p-2"
                >
                  Hapus
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editProduct && <EditProduct setEditProduct={setEditProduct} />}
      {addProduct && <AddProduct setAddProduct={setAddProduct} />}
      {delProduct && <DelProduct setDelProduct={setDelProduct} />}
    </div>
  )
}

export default TableProduct

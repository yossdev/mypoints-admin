import icon from '../../../../assets/product.png'
import { useState } from 'react'
import Pagination from './Pagination'

const TableProduct = ({ data, handleClickEdit, handleClickHapus }) => {
  const [start, setStart] = useState(0)

  const totalRender = 10

  const handlePrev = () => {
    setStart(start - totalRender)
  }

  const handleNext = () => {
    setStart(start + totalRender)
  }

  return (
    <div className="grid">
      <div className="font-roboto">
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
            {data.products.map((product, idx) => {
              if (idx >= start && idx <= start + totalRender) {
                return (
                  <tr key={product.id} className="text-center">
                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      {product.img !== '' ? (
                        <img
                          alt="product"
                          src={product.img}
                          className="w-8 h-8 float-right"
                        />
                      ) : (
                        <img
                          alt="product"
                          src={icon}
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
                        onClick={() => handleClickEdit(product.id)}
                        className="font-semibold text-darkgrey hover:bg-lightpurple rounded-full cursor-pointer p-2 mr-4"
                      >
                        Edit
                      </span>
                      <span
                        onClick={() => handleClickHapus(product.id)}
                        className="font-semibold text-red hover:bg-lightpurple rounded-full cursor-pointer p-2"
                      >
                        Hapus
                      </span>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        prev={handlePrev}
        next={handleNext}
        start={start}
        len={data.products.length}
        totalRender={totalRender}
      />
    </div>
  )
}

export default TableProduct

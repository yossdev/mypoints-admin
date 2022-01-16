import { TagIcon } from '@primer/octicons-react'
import TableProduct from '../../UI/organisms/Products/TableProduct'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../../GraphQL/Query'

const Product = () => {
  document.title = 'Product'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

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
        <TableProduct data={data} />
      </div>
    </>
  )
}

export default Product

import { useState } from 'react'

import axios from 'axios'
import MainLoading from '../../atoms/Spinner/MainLoading'
import useJwtDecode from '../../../../Hooks/useJwtDecode'

import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import DelProduct from './DelProduct'

import gifts from '../../../../assets/gifts.svg'

const TableProduct = (props) => {
  const [editProduct, setEditProduct] = useState(false)
  const [addProduct, setAddProduct] = useState(false)
  const [delProduct, setDelProduct] = useState(false)

  const JWT = useJwtDecode()
  const adminId = JWT.decoded.sub
  const apiAddProduct = `https://server.mypoints.site/api/v1/product/${adminId}`

  const productBody = {
    admin_id: adminId,
    img: '',
    points: 0,
    title: '',
  }

  const [image, setImage] = useState('')

  const [reqProduct, setReqProduct] = useState(productBody)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const onChangeProduct = (e) => {
    const value = e.target.value
    setReqProduct({ ...reqProduct, [e.target.name]: value })
  }

  const handleClick = (e) => {
    const productId = e.target.value
    const product = props.data.products.find(
      (product) => product.id === parseInt(productId)
    )

    console.log('ini data', product)

    setReqProduct({
      ...reqProduct,
      points: product.points,
      title: product.title,
    })

    setEditProduct(true)
  }

  const handleImg = (e) => {
    setImage(e.target.files[0])
  }

  // upload image to cloudinary
  const cloudinary = async () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'mypoints_media')
    data.append('cloud_name', 'mypoints')
    data.append('secure', true)

    try {
      const resp = await axios.post(
        'https://api.cloudinary.com/v1_1/mypoints/image/upload',
        data
      )
      return resp
    } catch (err) {
      return err.json()
    }
  }

  const handleSubmitAddProduct = async (e) => {
    e.preventDefault()
    setLoading(true)

    let cld
    try {
      cld = await cloudinary()
    } catch (err) {
      setError(err)
      setLoading(false)
    }

    axios
      .post(
        apiAddProduct,
        { ...reqProduct, img: cld?.data.url },
        {
          headers: { Authorization: `Bearer ${JWT.token}` },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false)
        setReqProduct(productBody)
      })
  }

  if (loading) return <MainLoading />

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
            <tr key={product.id} className="text-center">
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
                  onClick={handleClick}
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

      {editProduct && (
        <EditProduct
          handleOnChange={onChangeProduct}
          setEditProduct={setEditProduct}
          reqProduct={reqProduct}
        />
      )}

      {addProduct && (
        <AddProduct
          setAddProduct={setAddProduct}
          reqProduct={reqProduct}
          handleOnChange={onChangeProduct}
          handleSubmit={handleSubmitAddProduct}
          handleImg={handleImg}
          error={error}
        />
      )}
      {delProduct && <DelProduct setDelProduct={setDelProduct} />}
    </div>
  )
}

export default TableProduct

import { TagIcon } from '@primer/octicons-react'

import BtnAddProduct from '../../UI/atoms/Button/AddProduct'
import TableProduct from '../../UI/organisms/Products/TableProduct'
import AddProduct from '../../UI/organisms/Products/AddProduct'
import EditProduct from '../../UI/organisms/Products/EditProduct'
import DelProduct from '../../UI/organisms/Products/DelProduct'

import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../../../GraphQL/Query'

import axios from 'axios'
import useJwtDecode from '../../../Hooks/useJwtDecode'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

const Product = () => {
  document.title = 'Product'
  document.body.style = 'background: #EEEEEE;'

  const [addProduct, setAddProduct] = useState(false)
  const [editProduct, setEditProduct] = useState(false)
  const [delProduct, setDelProduct] = useState(false)
  const [productID, setProductID] = useState()

  const { data, loading, error, refetch } = useQuery(GET_PRODUCT, {
    notifyOnNetworkStatusChange: true,
  })

  const JWT = useJwtDecode()
  const adminId = JWT.decoded.sub
  const apiAddProduct = `https://server.mypoints.site/api/v1/product/${adminId}`
  const apiEditProduct = `https://server.mypoints.site/api/v1/product/${adminId}/${productID}`
  const apiDeleteProduct = `https://server.mypoints.site/api/v1/product/${adminId}/${productID}`

  const productBody = {
    admin_id: adminId,
    img: '',
    points: 0,
    title: '',
  }

  const [image, setImage] = useState('')
  const [reqProduct, setReqProduct] = useState(productBody)
  const [errorAxios, setErrorAxios] = useState()
  const [loadingAxios, setLoadingAxios] = useState(false)

  const onChangeAddProduct = (e) => {
    const value = e.target.value

    if (e.target.name === 'points') {
      setReqProduct({ ...reqProduct, [e.target.name]: parseInt(value) })
    } else {
      setReqProduct({ ...reqProduct, [e.target.name]: value })
    }
  }

  const onChangeEditProduct = (e) => {
    const value = e.target.value

    if (e.target.name === 'points') {
      setReqProduct({ ...reqProduct, [e.target.name]: parseInt(value) })
    } else {
      setReqProduct({ ...reqProduct, [e.target.name]: value })
    }
  }

  const handleClickEdit = (productId) => {
    const product = data.products.find(
      (product) => product.id === parseInt(productId)
    )

    setReqProduct({
      ...reqProduct,
      points: product.points,
      title: product.title,
    })

    setProductID(productId)
    setEditProduct(true)
  }

  const handleClickHapus = (productId) => {
    const product = data.products.find(
      (product) => product.id === parseInt(productId)
    )

    setReqProduct({
      ...reqProduct,
      points: product.points,
      title: product.title,
    })

    setProductID(productId)
    setDelProduct(true)
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
    setLoadingAxios(true)

    let cld
    if (image !== '') {
      try {
        cld = await cloudinary()
      } catch (err) {
        setErrorAxios(err)
      }
    }

    axios
      .post(
        apiAddProduct,
        { ...reqProduct, img: cld?.data.url },
        {
          headers: { Authorization: `Bearer ${JWT.token}` },
        }
      )
      .then((response) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setReqProduct(productBody)
        setAddProduct(false)
        setLoadingAxios(false)
      })
  }

  const handleSubmitEditProduct = async (e) => {
    e.preventDefault()
    setLoadingAxios(true)

    let cld
    if (image !== '') {
      try {
        cld = await cloudinary()
      } catch (err) {
        setErrorAxios(err)
      }
    }

    axios
      .put(
        apiEditProduct,
        { ...reqProduct, img: cld?.data.url },
        {
          headers: { Authorization: `Bearer ${JWT.token}` },
        }
      )
      .then((resp) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setEditProduct(false)
        setLoadingAxios(false)
      })
  }

  const handleDeleteProduct = (e) => {
    e.preventDefault()
    setLoadingAxios(true)

    axios
      .delete(apiDeleteProduct, {
        headers: { Authorization: `Bearer ${JWT.token}` },
      })
      .then((resp) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setDelProduct(false)
        setLoadingAxios(false)
      })
  }

  if (loading || loadingAxios) return <MainLoading />
  if (error) return <Error />

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <TagIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Products</span>
      </div>

      <div
        style={{
          marginTop: '20px',
          width: '80%',
          padding: '20px',
          float: 'right',
        }}
      >
        <BtnAddProduct setAddProduct={setAddProduct} />
        <TableProduct
          data={data}
          handleClickEdit={handleClickEdit}
          handleClickHapus={handleClickHapus}
        />
      </div>

      {addProduct && (
        <AddProduct
          setAddProduct={setAddProduct}
          reqProduct={reqProduct}
          onChangeAddProduct={onChangeAddProduct}
          handleSubmit={handleSubmitAddProduct}
          handleImg={handleImg}
          error={errorAxios}
        />
      )}

      {editProduct && (
        <EditProduct
          setEditProduct={setEditProduct}
          reqProduct={reqProduct}
          handleImg={handleImg}
          onChangeEditProduct={onChangeEditProduct}
          handleSubmitEditProduct={handleSubmitEditProduct}
          error={errorAxios}
        />
      )}

      {delProduct && (
        <DelProduct
          setDelProduct={setDelProduct}
          handleDeleteProduct={handleDeleteProduct}
          reqProduct={reqProduct}
        />
      )}
    </>
  )
}

export default Product

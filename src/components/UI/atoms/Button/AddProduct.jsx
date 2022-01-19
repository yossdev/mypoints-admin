const AddProduct = (props) => {
  const { setAddProduct } = props

  return (
    <>
      <button
        onClick={() => setAddProduct(true)}
        className="mb-3 mr-4 border-2 bg-purple hover:bg-darkpurple text-sm text-white font-roboto p-3 rounded-md"
      >
        + Tambah Produk
      </button>
    </>
  )
}

export default AddProduct

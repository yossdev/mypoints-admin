const AddProduct = (props) => {
  const {
    setAddProduct,
    reqProduct,
    handleOnChange,
    handleSubmit,
    handleImg,
    error,
  } = props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="w-2/6 mx-auto flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        <div>{JSON.stringify(reqProduct, null, 2)}</div>

        <form
          onSubmit={handleSubmit}
          method="post"
          className="mx-auto w-full items-center justify-center mb-4 rounded"
        >
          <div>
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Nama Produk
            </label>
            <input
              onChange={handleOnChange}
              name="title"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Points
            </label>
            <input
              onChange={handleOnChange}
              name="points"
              className="w-1/3 h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Gambar
            </label>
            <input
              className="font-light text-sm"
              onChange={handleImg}
              type="file"
              accept=".jpg, .jpeg, .png"
            />
          </div>

          {error ? (
            <div className="mt-6 text-sm text-center text-red italic">
              Terjadi kesalahan, silahkan coba lagi!
            </div>
          ) : null}

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
            >
              Tambah
            </button>

            <button
              onClick={() => setAddProduct(false)}
              className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct

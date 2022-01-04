const ModalProduct = ({ setOpenModal }) => {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        id="modalProduct"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Product</h3>
              <button
                onClick={() => setOpenModal(false)}
                className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white"
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div>
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  for="product"
                >
                  Product
                </label>
                <input
                  className="w-full bg-gray-100 px-8 py-2 rounded-lg focus:outline-none"
                  type="text"
                  name="product"
                  id="product"
                  placeholder="your product"
                />
              </div>
              <div>
                <label
                  className="text-gray-800 font-semibold block my-3 text-md"
                  for="point"
                >
                  Point
                </label>
                <input
                  className="w-full bg-gray-100 px-8 py-2 rounded-lg focus:outline-none"
                  type="number"
                  name="point"
                  id="point"
                  placeholder="point"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpenModal(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default ModalProduct

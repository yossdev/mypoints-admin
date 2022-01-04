import React from 'react'

const ModalHistory = ({ setOpenModal }) => {
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
              <h3 className="text-3xl font-semibold">Add Agent</h3>
              <button
                onClick={() => setOpenModal(false)}
                class="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white"
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div>
                <label
                  class="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="agent"
                >
                  Agent
                </label>
                <input
                  class="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-gray-100 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  name="agent"
                  placeholder="wawan"
                  id="agent"
                  disabled
                />
              </div>
              <div>
                <label
                  class="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="product"
                >
                  Product
                </label>
                <input
                  class="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-gray-100 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  placeholder="poco x3 pro"
                  disabled
                  id="product"
                  name="product"
                />
              </div>
              <div>
                <label
                  class="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="reward"
                >
                  Reward
                </label>
                <input
                  class="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-gray-100 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  placeholder="Link aja 100000"
                  disabled
                  id="reward"
                  name="reward"
                />
              </div>
              <div>
                <label
                  class="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="poin"
                >
                  Point
                </label>
                <input
                  class="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-gray-100 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="number"
                  placeholder="1000"
                  disabled
                  id="poin"
                  name="poin"
                />
              </div>
              <div>
                <label
                  class="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="type"
                >
                  Type
                </label>
                <input
                  class="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-gray-100 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  placeholder="debit"
                  disabled
                  id="type"
                  name="type"
                />
              </div>
              <div>
                <label
                  class="text-gray-800 font-semibold block my-3 text-md"
                  htmlFor="status"
                >
                  Status
                </label>
                <input
                  class="w-full bg-gray-100 px-8 py-2 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="pending"
                  id="status"
                  name="status"
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
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  )
}

export default ModalHistory

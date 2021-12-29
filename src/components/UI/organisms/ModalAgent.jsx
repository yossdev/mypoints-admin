import { useState } from 'react'
import Agents from '../../pages/Agents'
const ModalAgent = () => {
  const [showModal, setShowModal] = useState(false)
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
                onclick={() => setShowModal(true)}
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
                  for="username"
                >
                  Username
                </label>
                <input
                  class="w-full bg-gray-100 px-8 py-2 rounded-lg focus:outline-none"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                />
              </div>
              <div>
                <label
                  class="text-gray-800 font-semibold block my-3 text-md"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full bg-gray-100 px-8 py-2 rounded-lg focus:outline-none"
                  type="email"
                  placeholder="yourname@gmail.com"
                  autocomplete="on"
                  required
                  id="email"
                />
              </div>
              <div>
                <label
                  class="text-gray-800 font-semibold block my-3 text-md"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="w-full bg-gray-100 px-8 py-2 rounded-lg focus:outline-none"
                  type="password"
                  required
                  id="password"
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onclick={() => setShowModal(true)}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      {showModal ? <Agents /> : null}
    </>
  )
}

export default ModalAgent

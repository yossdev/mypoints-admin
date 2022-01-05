import { useState } from 'react'

const ModalProfile = ({ setOpenModal }) => {
  const [file, setFile] = useState()

  const onChangePhoto = (e) => {
    setFile(e.target.files[0])
  }
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        id="modalProduct"
        onClick={() => setOpenModal(false)}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Profile</h3>
              <button
                onclick="modalProduct(false)"
                onClick={() => setOpenModal(false)}
                className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white"
              >
                X
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="profile"
                  className="max-w-xs h-auto rounded-full w-3/12"
                />
              )}
              <div className="flex justify-center">
                <div className="mb-3 w-96">
                  <label
                    for="formFile"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Your photo
                  </label>
                  <input
                    className="form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="fileInput"
                    onChange={onChangePhoto}
                  />
                </div>
              </div>
              <div>
                <label
                  className="form-label inline-block mb-2 text-gray-700 text-sm"
                  for="username"
                >
                  Username
                </label>
                <input
                  className="form-control
                  block
                  w-full
                  px-2
                  py-1
                  text-sm
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="new username"
                />
              </div>
              <div>
                <label
                  className="form-label inline-block mb-2 text-gray-700 text-sm"
                  for="point"
                >
                  Email
                </label>
                <input
                  className="form-control
                  block
                  w-full
                  px-2
                  py-1
                  text-sm
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="new email"
                />
              </div>
              <div>
                <label
                  className="form-label inline-block mb-2 text-gray-700 text-sm"
                  for="point"
                >
                  Password
                </label>
                <input
                  className="form-control
                  block
                  w-full
                  px-2
                  py-1
                  text-sm
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="new password"
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

export default ModalProfile

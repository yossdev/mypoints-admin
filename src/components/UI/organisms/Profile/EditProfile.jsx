import { useState } from 'react'

const EditProfile = () => {
  const [editPassword, setEditPassword] = useState(false)

  return (
    <div
      style={{ width: '62%', margin: 'auto', marginTop: '20px' }}
      className="rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="ml-6 pb-6 mt-6">
        <h3 className="text-2xl text-purple bold font-roboto">Edit Profile</h3>
        <p className="mt-2 font-roboto font-light">
          Silahkan jika ingin melakukan perubahan data Anda
        </p>
      </div>

      <div className="border-b"></div>

      <form className="px-8 pt-6 pb-8 justify-center mb-4 bg-white rounded">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-purple font-roboto"
            htmlFor="email"
          >
            Nama Agen
          </label>
          <input
            className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-purple font-roboto">
            Email
          </label>
          <input
            className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            type="email"
          />
        </div>

        <div>
          <p
            onClick={() => setEditPassword(!editPassword)}
            className="text-center mb-4 text-sm text-blue-500 cursor-pointer hover:underline hover:text-blue-800"
          >
            Edit Password?
          </p>
        </div>

        {editPassword ? (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Password
            </label>
            <input
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
            />

            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Confirm Password
            </label>
            <input
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
            />
          </div>
        ) : null}
      </form>
    </div>
  )
}

export default EditProfile

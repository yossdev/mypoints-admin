import { useState } from 'react'

const EditProfile = () => {
  const [editPassword, setEditPassword] = useState(false)

  return (
    <div
      style={{ width: '62%', margin: 'auto', marginTop: '20px' }}
      className="rounded-lg overflow-hidden shadow-lg bg-white font-roboto"
    >
      <div className="ml-6 pb-6 mt-6">
        <h3 className="text-2xl text-purple bold font-roboto">Edit Profile</h3>
        <p className="mt-2 font-light">
          Silahkan jika ingin melakukan perubahan data Anda
        </p>
      </div>

      <hr />
      <form className="px-8 pt-6 justify-center mb-4 bg-white rounded">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-purple font-roboto"
            htmlFor="email"
          >
            Nama Agen
          </label>
          <input
            name="name"
            className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            type="text"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-purple font-roboto">
            Email
          </label>
          <input
            name="email"
            className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            type="email"
            required
          />
        </div>

        <div>
          <p className="text-center mb-4 text-sm text-blue-500 cursor-pointer hover:underline hover:text-blue-800">
            Edit Password?
          </p>
        </div>

        {editPassword ? (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Password
            </label>
            <input
              name="password"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
            />

            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
            />
          </div>
        ) : null}

        <div className="flex justify-center pt-7 pb-2 border-t">
          <div className="text-center mr-6">
            <button
              type="submit"
              className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 rounded-md"
            >
              Update Profile
            </button>
          </div>

          <div className="text-center mr-6">
            <button className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md">
              Batal
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProfile

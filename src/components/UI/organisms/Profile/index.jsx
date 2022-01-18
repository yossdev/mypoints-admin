import { useState } from 'react'

import EditProfile from './EditProfile'

const Profile = (props) => {
  const name =
    props.admin.name.charAt(0).toUpperCase() + props.admin.name.slice(1)

  const [editProfile, setEditProfile] = useState(false)
  const [editPhoto, setEditPhoto] = useState(false)

  return (
    <>
      <div
        style={{ width: '35%', margin: 'auto' }}
        className="rounded-lg overflow-hidden shadow-lg bg-white"
      >
        <div className="flex justify-center mt-8">
          {props.img === '' ? (
            <img
              alt="avatar"
              src={props.admin.img}
              className="rounded-full w-28 h-28 -mt-3"
            />
          ) : (
            <img
              alt="avatar"
              src="https://kredithptangcity.com/wp-content/uploads/2020/11/user.png"
              className="rounded-full w-28 h-28 mt-3 max-h-36"
            />
          )}
        </div>

        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-2xl text-purple bold font-roboto">{name}</h3>
          <h3 className="text-2xl text-purple bold font-roboto">
            {props.admin.email}
          </h3>
        </div>

        <div className="border-t-2 py-3">
          <p
            onClick={() => setEditPhoto(true)}
            className="bg-white mx-auto w-1/2 text-center hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-3 rounded-md cursor-pointer"
          >
            Upload Foto
          </p>

          <p
            onClick={() => setEditProfile(true)}
            className="bg-white mx-auto w-1/2 text-center hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-3 rounded-md cursor-pointer"
          >
            Edit Profile
          </p>
        </div>

        {/* TODO */}
        {editPhoto ? (
          <form className="mx-auto text-center items-center justify-center mb-4 border-t-2 rounded">
            <div>
              <input
                className="w-full ml-16 mt-4 h-10 text-sm"
                type="file"
                accept=".jpg, .jpeg, .png"
              />
            </div>

            <button
              type="submit"
              className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
            >
              Upload Foto
            </button>

            <button
              onClick={() => setEditPhoto(false)}
              className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
            >
              Batal
            </button>
          </form>
        ) : null}
      </div>

      {editProfile ? <EditProfile /> : null}
    </>
  )
}

export default Profile

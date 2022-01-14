import { useState } from 'react'

import EditProfile from './EditProfile'

const Profile = () => {
  //   const name =
  //     props.agent.name.charAt(0).toUpperCase() + props.agent.name.slice(1)

  const [editProfile, setEditProfile] = useState(false)
  const [editPhoto, setEditPhoto] = useState(false)

  return (
    <>
      <div
        style={{ width: '35%', margin: 'auto' }}
        className="rounded-lg overflow-hidden shadow-lg bg-white"
      >
        <div className="flex justify-center mt-8">
          {/* {props.img !== '' ? (
            <img
              alt="avatar"
              src={props.agent.img}
              className="rounded-full border-solid border-white border-2 -mt-3"
            />
          ) : (
            <img
              alt="avatar"
              src="https://kredithptangcity.com/wp-content/uploads/2020/11/user.png"
              className="rounded-full border-solid border-white border-2 mt-3 max-h-36"
            />
          )} */}
        </div>

        <div className="text-center px-3 pb-6 pt-2">
          <h3 className="text-2xl text-purple bold font-roboto">Nama Admin</h3>
          <h3 className="text-2xl text-purple bold font-roboto">Blablabla</h3>
        </div>

        <div className="border-t-2 py-3">
          <p
            onClick={() => setEditPhoto(!editPhoto)}
            className="bg-white mx-auto w-1/2 text-center hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-3 rounded-md cursor-pointer"
          >
            Upload Foto
          </p>

          <p
            onClick={() => setEditProfile(!editProfile)}
            className="bg-white mx-auto w-1/2 text-center hover:bg-lightpurple text-purple text-sm font-roboto py-3 px-3 rounded-md cursor-pointer"
          >
            Edit Profile
          </p>
        </div>

        {/* TODO */}
        {editPhoto ? (
          <div className="flex justify-center py-3 border-t">
            <div className="text-center inline-block">
              <input type="file" />
            </div>
          </div>
        ) : null}
      </div>

      {editProfile ? <EditProfile /> : null}
    </>
  )
}

export default Profile

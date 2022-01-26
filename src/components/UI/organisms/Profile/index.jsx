import user from '../../../../assets/user.png'

import { useState } from 'react'
import EditProfile from './EditProfile'
import axios from 'axios'
import useJwtDecode from '../../../../Hooks/useJwtDecode'
import MainLoading from '../../atoms/Spinner/MainLoading'

import moment from 'moment'

const Profile = (props) => {
  const name =
    props.admin.name.charAt(0).toUpperCase() + props.admin.name.slice(1)

  const JWT = useJwtDecode()
  const adminId = JWT.decoded.sub
  const apiProfile = `https://server.mypoints.site/api/v1/admin/profile/${adminId}`
  const apiAvatar = `https://server.mypoints.site/api/v1/admin/profile/avatar/${adminId}`

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const profileBody = {
    email: props.admin.email,
    name: props.admin.name,
    password: '',
  }

  const editState = {
    profile: false,
    avatar: false,
  }

  const [edit, setEdit] = useState(editState)

  const handleEditProfile = () => {
    setEdit({ ...editState, profile: true })
  }

  const handleEditAvatar = () => {
    setEdit({ ...editState, avatar: true })
  }

  const [reqProfile, setReqProfile] = useState(profileBody)
  const [image, setImage] = useState('')

  // update profile
  const handleUpdateProfile = (e) => {
    e.preventDefault()
    setLoading(true)

    axios
      .put(apiProfile, reqProfile, {
        headers: { Authorization: `Bearer ${JWT.token}` },
      })
      .then((resp) => {
        // console.log(resp)
        props.refetch()
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false)
      })
  }

  const handleCancelProfile = () => {
    setReqProfile(profileBody)
    setEdit({ ...editState, profile: false })
  }

  // update avatar
  const handleImg = (e) => {
    setImage(e.target.files[0])
  }

  const handleCancelImg = () => {
    setEdit({ ...editState, avatar: false })
    setImage('')
    setError(null)
  }

  const cloudinary = async () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'mypoints_media')
    data.append('cloud_name', 'mypoints')
    data.append('secure', true)

    try {
      const resp = await axios.post(
        'https://api.cloudinary.com/v1_1/mypoints/image/upload',
        data
      )
      return resp
    } catch (err) {
      return err.json()
    }
  }

  const handleUpdateAvatar = async (e) => {
    e.preventDefault()
    setLoading(true)

    let cld
    try {
      cld = await cloudinary()
    } catch (err) {
      setError(err)
      setLoading(false)
    }

    axios
      .put(
        apiAvatar,
        { img: cld?.data.url },
        {
          headers: { Authorization: `Bearer ${JWT.token}` },
        }
      )
      .then((resp) => {
        // console.log(resp)
        // TODO cause no-op
        props.refetch()
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false)
      })
  }

  if (loading) return <MainLoading />

  return (
    <>
      <div
        style={{ width: '35%', margin: 'auto' }}
        className="rounded-lg overflow-hidden shadow-lg bg-white font-roboto"
      >
        <div className="flex justify-center mt-10">
          {props.admin.img !== '' ? (
            <img
              alt="avatar"
              src={props.admin.img}
              className="rounded-full w-28 h-28 -mt-3"
            />
          ) : (
            <img
              alt="avatar"
              src={user}
              className="rounded-full w-28 h-28 -mt-3"
            />
          )}
        </div>

        <div className="px-3 pb-6 pt-2 mt-3">
          <h3 className="text-center text-2xl text-purple bold font-roboto">
            {name}
          </h3>
          <div className="mt-6 ml-28">
            <span className="text-md text-gray-400">EMAIL:</span>
            <p className=" text-2xl text-purple bold font-roboto mb-2">
              {' '}
              {props.admin.email}
            </p>

            <span className="text-md text-gray-400">TANGGAL JOIN:</span>
            <p className="text-2xl text-purple bold font-roboto mb-2">
              {' '}
              {moment(props.admin.created_at).format('LL')}
            </p>
          </div>
        </div>

        <div className="py-3">
          <p
            onClick={handleEditAvatar}
            className="bg-white mx-auto w-1/2 text-center py-2 hover:bg-lightpurple text-purple text-sm font-roboto px-3 rounded-md cursor-pointer"
          >
            Upload Foto
          </p>

          <p
            onClick={handleEditProfile}
            className="bg-white mx-auto w-1/2 text-center py-2 hover:bg-lightpurple text-purple text-sm font-roboto px-3 rounded-md cursor-pointer"
          >
            Edit Profile
          </p>
        </div>

        {error ? (
          <div className="mt-6 text-sm text-center text-red italic">
            Terjadi kesalahan, silahkan coba lagi!
          </div>
        ) : null}

        {/* update avatar */}
        {edit.avatar ? (
          <form
            method="put"
            onSubmit={handleUpdateAvatar}
            className="mx-auto text-center items-center justify-center mb-4 border-t-2 rounded"
          >
            <div>
              <input
                className="w-full ml-16 mt-4 h-10 text-sm"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleImg}
              />
            </div>

            <button
              type="submit"
              className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
            >
              Upload Foto
            </button>

            <button
              onClick={handleCancelImg}
              className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
            >
              Batal
            </button>
          </form>
        ) : null}
      </div>

      {/* update profile */}
      {edit.profile ? (
        <EditProfile
          update={handleUpdateProfile}
          cancel={handleCancelProfile}
          reqProfile={reqProfile}
          setReqProfile={setReqProfile}
        />
      ) : null}
    </>
  )
}

export default Profile

import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'
import { PersonIcon } from '@primer/octicons-react'
import ButtonEditProfile from '../UI/atoms/ButtonEditProfile'

const Profile = () => {
  document.title = 'Profile'
  return (
    <div className="h-screen bg-grey">
      <SideBar />
      <AdminMenu />
      <div className="mx-80 absolute mt-40 grid grid-cols-2 gap-2 font-Roboto">
        <img
          src="https://krs.umm.ac.id/Poto/2018/201810370311018.JPG"
          alt="profile"
          className="max-w-xs h-auto rounded-full w-9/12"
        />
        <div className=" text-lg grid grid-rows-6 mt-24">
          <p>
            Username : <span>Mohammad Wawan</span>
          </p>
          <p>
            Email : <span>mohammadwawan.24@gmail.com</span>
          </p>
          <ButtonEditProfile />
        </div>
      </div>

      <div className="ml-80 pt-3 font-Roboto">
        <PersonIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Profile</span> <br />
        <span className="text-md text-darkgrey font-bold">Profile</span>
      </div>
    </div>
  )
}
export default Profile

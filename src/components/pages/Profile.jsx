import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/molecules/AdminMenu'

const Profile = () => {
  document.title = 'Profile'
  return (
    <>
      <SideBar />
      <AdminMenu />
    </>
  )
}
export default Profile

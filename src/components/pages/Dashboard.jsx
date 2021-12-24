import AdminMenu from '../UI/organisms/AdminMenu'
import SideBar from '../UI/organisms/SideBar'

const Dashboard = () => {
  document.title = 'Dashboard'
  return (
    <>
      <SideBar />
      <AdminMenu />
    </>
  )
}

export default Dashboard

import AdminMenu from '../UI/molecules/AdminMenu'
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

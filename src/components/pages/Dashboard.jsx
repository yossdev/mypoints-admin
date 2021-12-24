import AdminMenu from '../UI/organisms/AdminMenu'
import SideBar from '../UI/organisms/SideBar'

const Dashboard = () => {
  document.title = 'Dashboard'
  return (
    <div className="h-screen bg-grey">
      <SideBar />
      <AdminMenu />

      <div className="ml-80 pt-3 font-roboto">
        <HomeIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Dashboard</span> <br />
        <span className="text-md text-darkgrey font-bold">Dashboard</span>
      </div>
    </div>
  )
}

export default Dashboard

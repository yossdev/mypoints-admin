import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'

const History = () => {
  document.title = 'History'
  return (
    <div className="h-screen bg-grey">
      <SideBar />
      <AdminMenu />

      <div className="ml-80 pt-3 font-roboto">
        <HomeIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ History</span> <br />
        <span className="text-md text-darkgrey font-bold">History</span>
      </div>
    </div>
  )
}

export default History

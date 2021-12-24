import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'

const Reward = () => {
  document.title = 'Reward'

  return (
    <div className="h-screen bg-grey">
      <SideBar />
      <AdminMenu />

      <div className="ml-80 pt-3 font-roboto">
        <HomeIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Reward</span> <br />
        <span className="text-md text-darkgrey font-bold">Reward</span>
      </div>
    </div>
  )
}

export default Reward

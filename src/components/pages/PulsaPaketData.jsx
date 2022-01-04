import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'

const PulsaPaketData = () => {
  document.title = 'Pulsa & Paket Data'
  return (
    <div>
      <div className="h-screen bg-grey">
        <SideBar />
        <AdminMenu />
      </div>
    </div>
  )
}

export default PulsaPaketData

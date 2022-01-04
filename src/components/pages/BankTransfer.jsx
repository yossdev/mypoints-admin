import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'

const BankTransfer = () => {
  document.title = 'Bank Transfer'
  return (
    <div>
      <div className="h-screen bg-grey">
        <SideBar />
        <AdminMenu />
      </div>
    </div>
  )
}

export default BankTransfer

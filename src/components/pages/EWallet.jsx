import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'

const EWallet = () => {
  document.title = 'E-Wallet'

  return (
    <div>
      <div className="h-screen bg-grey">
        <SideBar />
        <AdminMenu />
      </div>
    </div>
  )
}

export default EWallet

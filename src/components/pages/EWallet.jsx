import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'
import TableEWallet from '../UI/organisms/TableEWallet'
import ButtonAddRewardEWallet from '../UI/atoms/ButtonAddRewardEWallet'

const EWallet = () => {
  document.title = 'E-Wallet'

  return (
    <div>
      <div className="h-screen bg-grey">
        <SideBar />
        <AdminMenu />
        <ButtonAddRewardEWallet />
        <TableEWallet />
      </div>
    </div>
  )
}

export default EWallet

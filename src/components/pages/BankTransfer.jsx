import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'
import TableBankTransfer from '../UI/organisms/TableBankTransfer'
import ButtonAddRewardBank from '../UI/atoms/ButtonAddRewardBank'

const BankTransfer = () => {
  document.title = 'Bank Transfer'
  return (
    <div>
      <div className="h-screen bg-grey">
        <SideBar />
        <AdminMenu />
        <ButtonAddRewardBank />
        <TableBankTransfer />
      </div>
    </div>
  )
}

export default BankTransfer

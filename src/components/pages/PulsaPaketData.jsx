import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'
import TablePulsaPaketData from '../UI/organisms/TablePulsaPaketData'
import ButtonAddRewardPaketData from '../UI/atoms/ButtonAddRewardPaketData'

const PulsaPaketData = () => {
  document.title = 'Pulsa & Paket Data'
  return (
    <div>
      <div className="h-screen bg-grey">
        <SideBar />
        <AdminMenu />
        <ButtonAddRewardPaketData />
        <TablePulsaPaketData />
      </div>
    </div>
  )
}

export default PulsaPaketData

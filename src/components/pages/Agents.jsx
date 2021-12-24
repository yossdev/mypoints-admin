import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/molecules/AdminMenu'
import ButtonAddAgents from '../UI/atoms/ButtonAddAgents'
import TableAgents from '../UI/organisms/TableAgents'

const Agents = () => {
  document.title = 'Agents'

  return (
    <>
      <SideBar />
      <AdminMenu />
      <TableAgents />
      <ButtonAddAgents />
    </>
  )
}

export default Agents

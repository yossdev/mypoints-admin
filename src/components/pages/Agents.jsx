import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/molecules/AdminMenu'
import CardAgents from '../UI/organisms/CardAgents'
import ButtonAddAgents from '../UI/atoms/ButtonAddAgents'

const Agents = () => {
  document.title = 'Agents'

  return (
    <>
      <SideBar />
      <AdminMenu />
      <CardAgents />
      <ButtonAddAgents />
    </>
  )
}

export default Agents

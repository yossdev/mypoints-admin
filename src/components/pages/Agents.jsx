import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/molecules/AdminMenu'
import CardAgents from '../UI/organisms/CardAgents'

const Agents = () => {
  document.title = 'Agents'

  return (
    <>
      <SideBar />
      <AdminMenu />
      <CardAgents />
    </>
  )
}

export default Agents

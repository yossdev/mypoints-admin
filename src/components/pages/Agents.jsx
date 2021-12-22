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
      <div class=" absolute mt-32">
        <div class="absolute top-0 right-20 h-72 w-72 ">
          <ButtonAddAgents />
        </div>
        <CardAgents />
      </div>
    </>
  )
}

export default Agents

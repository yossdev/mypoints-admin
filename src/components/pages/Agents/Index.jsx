import SideBar from '../../UI/organisms/SideBar'
import AdminMenu from '../../UI/organisms/AdminMenu'

import TableAgents from '../../UI/organisms/TableAgents'

import { PersonIcon } from '@primer/octicons-react'
import ButtonAddAgents from '../../UI/atoms/ButtonAddAgents'

const Agents = () => {
  document.title = 'Agents'

  return (
    <div className="h-screen bg-grey">
      <SideBar />
      <AdminMenu />
      <ButtonAddAgents />
      <TableAgents />
      <div className="ml-80 pt-3 font-Roboto">
        <PersonIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Agents</span> <br />
        <span className="text-md text-darkgrey font-bold">Agents</span>
      </div>
    </div>
  )
}

export default Agents
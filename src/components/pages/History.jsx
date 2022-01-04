import SideBar from '../UI/organisms/SideBar'
import AdminMenu from '../UI/organisms/AdminMenu'

import { HourglassIcon } from '@primer/octicons-react'
import TableHistory from '../UI/organisms/TableHistory'

const History = () => {
  document.title = 'History'
  return (
    <div className="h-screen bg-grey">
      <SideBar />
      <AdminMenu />
      <TableHistory />
      <div className="ml-80 pt-3 font-Roboto">
        <HourglassIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ History</span> <br />
        <span className="text-md text-darkgrey font-bold">History</span>
      </div>
    </div>
  )
}

export default History

import AdminMenu from '../../UI/organisms/AdminMenu'
import SideBar from '../../UI/organisms/SideBar'

import { HomeIcon } from '@primer/octicons-react'
import ChartPenjualan from '../../UI/organisms/ChartPenjualan'
import CardDashboard from '../../UI/organisms/CardDashboard'

const Dashboard = () => {
  document.title = 'Dashboard'
  return (
    <div className="h-screen bg-grey">
      <SideBar />
      <AdminMenu />
      <div className="ml-80 pt-3 font-Roboto">
        <HomeIcon size={16} fill="darkgrey" />
        <span className="text-sm ml-2 text-darkgrey">/ Dashboard</span> <br />
        <span className="text-md text-darkgrey font-bold">Dashboard</span>
      </div>
      <div className="mx-80 absolute mt-24 ">
        <CardDashboard />
      </div>
      <ChartPenjualan />
    </div>
  )
}

export default Dashboard

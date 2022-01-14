import { HomeIcon } from '@primer/octicons-react'

const Dashboard = () => {
  document.title = 'Dashboard'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-Roboto">
        <HomeIcon size={16} fill="darkgrey" />
        <span className="text-lg text-darkgrey font-bold">/ Dashboard</span>
      </div>
    </>
  )
}

export default Dashboard

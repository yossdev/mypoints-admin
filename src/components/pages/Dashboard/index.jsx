import { HomeIcon } from '@primer/octicons-react'

const Dashboard = () => {
  document.title = 'Dashboard'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <HomeIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Dashboard</span>
      </div>
    </>
  )
}

export default Dashboard

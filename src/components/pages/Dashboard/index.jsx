import { HomeIcon } from '@primer/octicons-react'

import Greeting from '../../UI/organisms/Dashboard/Greetings'

const Dashboard = () => {
  document.title = 'Dashboard'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <HomeIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Dashboard</span>
      </div>

      <div
        style={{
          marginTop: '20px',
          marginRight: '15px',
          width: '80%',
          float: 'right',
          padding: '20px',
        }}
      >
        <Greeting />
      </div>
    </>
  )
}

export default Dashboard

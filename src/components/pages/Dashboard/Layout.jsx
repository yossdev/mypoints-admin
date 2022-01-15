import { Outlet } from 'react-router-dom'

import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'
// import MainLoading from '../../UI/atoms/Spinner/MainLoading'
// import Error from '../../UI/organisms/Error'

// import { useQuery } from '@apollo/client'
// import { GET_AGENT } from '../../../GraphQL/Query'

const Layout = () => {
  //   const { data, loading, error } = useQuery(GET_AGENT, {
  //     notifyOnNetworkStatusChange: true,
  //   })

  //   if (loading) return <MainLoading />
  //   if (error) return <Error />

  //   const agent = data.agents[0]

  return (
    <>
      <Sidebar />
      <UserMenu />

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

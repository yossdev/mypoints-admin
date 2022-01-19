import { Outlet } from 'react-router-dom'

import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'

import { useQuery } from '@apollo/client'
import { GET_ADMIN } from '../../../GraphQL/Query'

const Layout = () => {
  const { data } = useQuery(GET_ADMIN, {
    notifyOnNetworkStatusChange: true,
  })

  const admin = data.admins[0]

  return (
    <>
      <Sidebar />
      <UserMenu admin={admin} />

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

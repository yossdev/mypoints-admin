import { Outlet } from 'react-router-dom'

import UserMenu from '../../UI/organisms/UserMenu'
import Sidebar from '../../UI/organisms/Sidebar'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_ADMIN } from '../../../GraphQL/Query'

const Layout = () => {
  const { data, loading, error } = useQuery(GET_ADMIN, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

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

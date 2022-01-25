import { Navigate, useLocation, Outlet } from 'react-router-dom'
import useMyPointsAuth from '../../Hooks/useMyPointsAuth'

const PrivateRoute = () => {
  const auth = useMyPointsAuth()
  let location = useLocation()

  return auth ? (
    <Outlet />
  ) : (
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default PrivateRoute

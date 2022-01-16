import { store } from '../store/store'
import jwt_decode from 'jwt-decode'
import { useApolloClient } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { signOut } from '../store/slice'

const useMyPointsAuth = () => {
  const s = store.getState()

  const client = useApolloClient()
  const dispatch = useDispatch()

  const token = s.store.token
  if (s.store.token !== null) {
    const decoded = jwt_decode(token)
    if (decoded.exp * 1000 < Date.now()) {
      client.resetStore()
      dispatch(signOut())
    }
  }

  return s.store.isAuthenticated
}

export default useMyPointsAuth

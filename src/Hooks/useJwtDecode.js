import jwt_decode from 'jwt-decode'
import { store } from '../store/store'

const useJwtDecode = () => {
  const s = store.getState()
  const token = s.store.token
  const decoded = jwt_decode(token)

  let res = {
    decoded: decoded,
    token: token,
  }

  return res
}

export default useJwtDecode

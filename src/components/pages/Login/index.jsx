import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import logo from '../../../assets/logo.svg'

import { useDispatch } from 'react-redux'
import { isAuthenticated, storeJwt } from '../../../store/slice'
import { store } from '../../../store/store'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'

const api = 'https://server.mypoints.site/api/v1/admin/login'

const Login = () => {
  document.title = 'Login'

  const payload = {
    email: '',
    password: '',
  }

  const [reqBody, setReqBody] = useState(payload)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    setReqBody({
      ...reqBody,
      [e.target.name]: value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post(api, reqBody)
      .then(function (response) {
        // dispatch redux untuk simpan jwt access token
        const accessToken = response.data.data.access_token
        dispatch(storeJwt(accessToken))
        dispatch(isAuthenticated(true))
      })
      .catch(function (err) {
        setError(err)
        // console.log('ada error', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const s = store.getState()
  let navigate = useNavigate()
  let location = useLocation()

  let from = location.state?.from?.pathname || '/dashboard'

  // for redirect after successful login, using useEffect is not the best approach but it works for now
  useEffect(() => {
    if (!loading && s.store.isAuthenticated) {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true })
    }
  })

  if (loading) return <MainLoading />

  return (
    <div className="h-screen bg-purple flex items-center font-roboto">
      <div className="mx-auto space-y-6 bg-white shadow-md border border-white rounded-lg sm:px-10 sm:pb-8">
        <form method="post" className="space-y-6" onSubmit={handleLogin}>
          <img className="ml-8" alt="logo" src={logo} width={175} />

          <h3 className="text-xl font-medium text-purple">
            Selamat Datang Para Admin
          </h3>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-purple block mb-2"
            >
              E-mail <span className="text-red">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="name@company.com"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-purple block mb-2"
            >
              Password <span className="text-red">*</span>
            </label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4 text-sm text-red italic">* Wajib diisi</div>

          {error && (
            <div className="my-4 text-sm text-center text-red italic">
              Email atau Password salah, silahkan coba lagi!
            </div>
          )}

          <button
            type="submit"
            onClick={() => handleLogin}
            className="w-full text-white bg-purple hover:bg-darkpurple focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

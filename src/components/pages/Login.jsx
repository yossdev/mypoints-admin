import logo from '../UI/atoms/logo.svg'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const baseURL = 'https://server.mypoints.site/api/v1/admin/login'

const Login = () => {
  document.title = 'Login'

  const dataLogin = {
    email: '',
    password: '',
  }
  const navigate = useNavigate()
  const [reqBody, setReqBody] = useState(dataLogin)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

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
      .post(baseURL, reqBody)
      .then(function (response) {
        // dispatch redux untuk simpan jwt access token
        console.log('berhasil login', response.data.data)
      })
      .catch(function (err) {
        setError(err)
        // console.log('ada error', err)
      })
      .finally(() => {
        setLoading(false)
        navigate('/dashboard')
      })
  }

  if (loading) return <h1>loading...</h1>
  // if (error) return <h1>error...</h1>

  return (
    <div className="h-screen bg-purple flex items-center font-Roboto">
      <div className="mx-auto space-y-6 bg-white shadow-md border border-white rounded-lg lg:px-10 lg:pb-8">
        <form
          method="post"
          className="space-y-6"
          action="#"
          onSubmit={handleLogin}
        >
          <img className="ml-8" alt="logo" src={logo} width={175} />

          <h3 className="text-xl font-medium text-purple">
            Selamat Datang Para Admin
          </h3>
          {error && <h1>Gagal Login...</h1>}

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-purple block mb-2"
            >
              Your email
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
              Your password
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

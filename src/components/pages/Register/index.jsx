import logo from '../../../assets/logo.svg'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'

import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const baseURL = 'https://server.mypoints.site/api/v1/admin/signup'

const Register = () => {
  document.title = 'Register'

  const dataRegister = {
    name: '',
    email: '',
    password: '',
  }

  const inputPassword = {
    password: '',
    confirmPassword: '',
  }

  const [pass, setPass] = useState(inputPassword)

  const navigate = useNavigate()
  const [reqBody, setReqBody] = useState(dataRegister)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const handleChange = (e) => {
    const value = e.target.value
    setReqBody({
      ...reqBody,
      [e.target.name]: value,
    })

    setPass({ ...pass, [e.target.name]: value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post(baseURL, reqBody)
      .then(function (response) {
        // dispatch redux untuk simpan jwt access token
      })
      .catch(function (err) {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
        navigate('/login')
      })
  }

  if (loading) return <MainLoading />

  return (
    <div className="h-screen bg-purple flex items-center font-roboto">
      <div className="mx-auto space-y-6 bg-white shadow-md border border-white rounded-lg sm:px-10 sm:pb-8">
        <form method="post" className="space-y-4" onSubmit={handleRegister}>
          <img className="ml-8" alt="logo" src={logo} width={175} />

          <h3 className="text-xl font-medium text-purple">
            Silahkan Daftarkan Akun Anda
          </h3>

          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-purple block mb-2"
            >
              Nama Admin <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="username"
              onChange={handleChange}
              required
            />
          </div>

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
              placeholder="********"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-purple block mb-2"
            >
              Confirm Password <span className="text-red">*</span>
            </label>

            <input
              type="password"
              name="confirmPassword"
              id="password"
              placeholder="********"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mt-4 text-sm text-red italic">* Wajib diisi</div>

          {error && (
            <div className="my-4 text-sm text-center text-red italic">
              Terjadi kesalahan, silahkan coba lagi!
            </div>
          )}

          <button
            type="submit"
            disabled={pass.password !== pass.confirmPassword}
            className={
              pass.password !== pass.confirmPassword
                ? 'w-full opacity-50 bg-purple text-white text-sm font-roboto py-3 px-4 rounded-md'
                : 'w-full bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 rounded-md'
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register

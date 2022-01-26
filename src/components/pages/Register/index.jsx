import logo from '../../../assets/logo.svg'
import MainLoading from '../../UI/atoms/Spinner/MainLoading'

import axios from 'axios'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

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
      <div className="mx-auto w-1/3 space-y-6 bg-white shadow-md border border-white rounded-lg sm:px-10 sm:pb-5">
        <form method="post" className="space-y-6" onSubmit={handleRegister}>
          <div className="flex items-center justify-center pt-2">
            <img alt="logo" src={logo} width={175} />
            <span className="mt-1 font-poppins text-purple">Admin</span>
          </div>

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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              onChange={handleChange}
              placeholder="Name"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="name@mail.com"
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

        <hr />
        <div className="flex justify-between my-10">
          <NavLink to="/">
            <span className="text-purple hover:text-darkpurple hover:underline">
              Kembali
            </span>
          </NavLink>
          <span>
            <i>Sudah punya akun?</i>{' '}
            <NavLink to="/login">
              <span className="text-purple hover:text-darkpurple hover:underline">
                Login
              </span>
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register

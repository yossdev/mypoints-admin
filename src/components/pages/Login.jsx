import logo from '../UI/atoms/logo.svg'

const Login = () => {
  document.title = 'Login'

  return (
    <div className="h-screen bg-purple flex items-center font-Roboto">
      <div className="mx-auto space-y-6 bg-white shadow-md border border-white rounded-lg lg:px-10 lg:pb-8">
        <form className="space-y-6" action="#">
          <img className="ml-8" alt="logo" src={logo} width={175} />

          <h3 className="text-xl font-medium text-purple">
            Selamat Datang Para Admin
          </h3>

          <div>
            <label
              for="email"
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
              required
            />
          </div>

          <div>
            <label
              for="password"
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
              required
            />
          </div>

          <button
            type="submit"
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

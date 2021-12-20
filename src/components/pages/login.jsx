import pageImage from '../assets/img/first-image.png'

const Login = () => {
  document.title = 'Login'

  return (
    <div class="w-full flex flex-wrap">
      <div class="w-full md:w-1/2 flex flex-col">
        <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"></div>

        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl">Login</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            onsubmit="event.preventDefault();"
          >
            <div class="flex my-8 mx-4 md:mx-2 border-b-2 border-gray-700 hover:border-green-800">
              <label class="self-center">Email:</label>
              <input
                class="w-full py-3 pl-5 md:pl-20 border-0 focus:outline-none"
                type="email"
                placeholder="yourname@gmail.com"
                autocomplete="on"
                required
              />
            </div>
            <div class="flex my-8 mx-4 md:mx-2 border-b-2 border-gray-700 hover:border-green-800">
              <label class="self-center">Password:</label>
              <input
                class="w-full py-3 pl-2 md:pl-8 border-0 focus:outline-none"
                type="password"
                required
              />
            </div>
            <input
              type="submit"
              value="Login"
              class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <div class="text-center pt-12 pb-12">
            <p>
              Don't have an account?{' '}
              <a href="/register" class="underline font-semibold">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="w-1/2 shadow-2xl">
        <img
          src={pageImage}
          class="object-cover w-full h-screen hidden md:block"
        />
      </div>
    </div>
  )
}

export default Login

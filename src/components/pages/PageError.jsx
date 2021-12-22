import RepairImage from '../assets/img/repair.png'
import { useNavigate } from 'react-router-dom'

const PageError = () => {
  document.title = 'Page Error'

  const navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  return (
    <div class="flex items-center justify-center w-screen h-screen">
      <div class="px-4 lg:py-12">
        <div class="lg:gap-4 lg:flex">
          <div class="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 class="font-bold text-blue-400 text-6xl">Error!</h1>
            <p class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span class="text-red-500">Oops!</span> Our system is under
              maintenance.
            </p>
            <p class="mb-8 text-center text-gray-500 md:text-lg">
              Please come back later.
            </p>
            <a
              href="#"
              class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
              onClick={handleOK}
            >
              OK
            </a>
          </div>
          <div class="mt-4">
            <img
              src={RepairImage}
              alt="img"
              class="object-cover object-center w-96 h-96 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageError

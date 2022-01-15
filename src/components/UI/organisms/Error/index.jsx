import logo from '../../../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const PageError = () => {
  const navigate = useNavigate()
  const handleOK = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey">
      <section className="text-center mx-6 lg:w-2/3">
        <img className="m-auto w-24 lg:w-48" src={logo} alt="logo" />
        <h1 className="mt-2 mb-1 text-2xl lg:text-3xl">We'll be back soon!</h1>
        <div>
          <p>
            Sorry for the inconvenience. We&rsquo;re performing some maintenance
            at the moment. We will give an update soon.
          </p>
          <p className="mt-4">Team MyPoints</p>

          <button
            className="text-white bg-purple hover:bg-darkpurple font-semibold px-6 py-1.5 rounded-md mr-6"
            onClick={handleOK}
          >
            OK
          </button>
        </div>
      </section>
    </div>
  )
}

export default PageError

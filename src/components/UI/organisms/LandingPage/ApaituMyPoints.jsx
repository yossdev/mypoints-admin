import koin from '../../../../assets/koin.svg'
import TeksMyPoints from '../../molecules/TeksMyPoints'

const ApaItuMyPoints = () => {
  return (
    <div className="mt-36 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/* Left Col */}
      <div className="flex flex-col md:w-2/6 justify-center ml-16">
        <img
          className="lg:flex lg:items-stretch lg:justify-end"
          alt="koin mypoints"
          src={koin}
          width={600}
        />
      </div>

      {/* Right Col */}
      <TeksMyPoints />
    </div>
  )
}

export default ApaItuMyPoints

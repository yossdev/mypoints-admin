import agent from '../atoms/agent.svg'
import BannerTitle from '../molecules/BannerTitle'

const Banner = () => {
  return (
    <div className="mt-20 container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/* Left Col */}
      <BannerTitle />

      {/* Right Col */}
      <div className="flex flex-col md:w-2/6 justify-center ml-auto mr-12">
        <img
          className="lg:flex lg:items-stretch lg:justify-end"
          alt="banner agent"
          src={agent}
          width={500}
        />
      </div>
    </div>
  )
}

export default Banner

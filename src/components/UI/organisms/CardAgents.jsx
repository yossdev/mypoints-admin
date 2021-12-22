import pageImage from '../../assets/img/first-image.png'

const CardAgents = () => {
  return (
    <div class="max-w-xs mx-auto px-10 ml-72">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://krs.umm.ac.id/Poto/2018/201810370311018.JPG"
            alt="foto"
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              Mohammad Wawan
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
            point : 100
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardAgents

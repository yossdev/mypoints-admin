import { PersonIcon, TagIcon, GiftIcon } from '@primer/octicons-react'

const CardDashboard = () => {
  return (
    <div class="grid grid-cols-1 gap-40 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 ">
      {/* <!-- Start Card --> */}
      <div class="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-blue-400 to-blue-500 rounded-xl shadow-lg w-52">
        <div class="flex justify-center">
          <div class="flex justify-center p-4 bg-blue-400 ring-2 ring-blue-300 rounded-lg shadow-xl w-32">
            <PersonIcon className="h-8 w-8 text-white" />
          </div>
        </div>
        <div class="p-4">
          <p class="text-white font-semibold">Total Agent</p>
          <div class="flex justify-between mt-2">
            <p class="text-gray-200">100</p>
            <p class="text-white">Agent</p>
          </div>
        </div>
      </div>
      {/* <!--End Card --> */}

      {/* <!-- Start Card --> */}
      <div class="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-52">
        <div class="flex justify-center">
          <div class="flex justify-center p-4 bg-indigo-300 ring-2 ring-indigo-200 rounded-lg shadow-xl w-32">
            <TagIcon className="h-8 w-8 text-white" />
          </div>
        </div>
        <div class="p-4">
          <p class="text-white font-semibold">Product</p>
          <div class="flex justify-between mt-2">
            <p class="text-gray-200">200</p>
            <p class="text-white">Product</p>
          </div>
        </div>
      </div>
      {/* <!--End Card --> */}

      {/* <!-- Start Card --> */}
      <div class="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-pink-400 to-pink-500 rounded-xl shadow-lg w-52">
        <div class="flex justify-center">
          <div class="flex justify-center p-4 bg-pink-300 ring-2 ring-pink-200 rounded-lg shadow-xl w-32">
            <GiftIcon className="h-8 w-8 text-white" />
          </div>
        </div>
        <div class="p-4">
          <p class="text-white font-semibold">Reward</p>
          <div class="flex justify-between mt-2">
            <p class="text-gray-200">150</p>
            <p class="text-white">Reward</p>
          </div>
        </div>
      </div>
      {/* <!--End Card --> */}
    </div>
  )
}

export default CardDashboard

import { useState } from 'react'
import AddReward from './AddReward'
import EditReward from './EditReward'
import DelReward from './DelReward'

const TableReward = () => {
  const [editReward, setEditReward] = useState(false)
  const [addReward, setAddReward] = useState(false)
  const [delReward, setDelReward] = useState(false)

  return (
    <div className="font-roboto">
      <button
        onClick={() => setAddReward(true)}
        className="mb-3 mr-4 border-2 bg-purple hover:bg-darkpurple text-sm text-white font-roboto p-3 rounded-md"
      >
        + Tambah Reward
      </button>

      <table className="w-full float-right shadow-lg font-roboto">
        <thead>
          <tr>
            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase"></th>

            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
              HADIAH
            </th>

            <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
              NOMINAL
            </th>

            <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
              POINTS
            </th>

            <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
              ACTIONS
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-center">
            <td className=" border-b border-gray-200 bg-white text-sm">
              <img
                className="float-right"
                alt="reward-img"
                src={
                  'https://kredithptangcity.com/wp-content/uploads/2020/11/user.png'
                }
                width={30}
              />
            </td>

            <td className="-pl-6 py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">GoPay 30K</p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">30000</p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">120</p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <span
                onClick={() => setEditReward(true)}
                className="font-semibold text-darkgrey hover:bg-lightpurple rounded-full cursor-pointer p-2 mr-4"
              >
                Edit
              </span>
              <span
                onClick={() => setDelReward(true)}
                className="font-semibold text-red hover:bg-lightpurple rounded-full cursor-pointer p-2"
              >
                Hapus
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      {editReward && <EditReward setEditReward={setEditReward} />}
      {addReward && <AddReward setAddReward={setAddReward} />}
      {delReward && <DelReward setDelReward={setDelReward} />}
    </div>
  )
}

export default TableReward

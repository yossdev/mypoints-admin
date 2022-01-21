import hadiah from '../../../../assets/gifts.svg'

const TableReward = ({ data, handleClickEdit, handleClickHapus }) => {
  return (
    <div className="font-roboto">
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
          {data.rewards.map((reward) => (
            <tr key={reward.id} className="text-center">
              <td className=" border-b border-gray-200 bg-white text-sm">
                {reward.img !== '' ? (
                  <img
                    alt="gift-img"
                    src={reward.img}
                    className="w-8 h-8 float-right"
                  />
                ) : (
                  <img
                    alt="gift"
                    src={hadiah}
                    className="w-8 h-8 float-right"
                  />
                )}
              </td>

              <td className="-pl-6 py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {reward.title}
                </p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {/* TODO value ga mau muncul */}
                  {reward.value}
                </p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {reward.points}
                </p>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <span
                  onClick={() => handleClickEdit(reward.id)}
                  className="font-semibold text-darkgrey hover:bg-lightpurple rounded-full cursor-pointer p-2 mr-4"
                >
                  Edit
                </span>
                <span
                  onClick={() => handleClickHapus(reward.id)}
                  className="font-semibold text-red hover:bg-lightpurple rounded-full cursor-pointer p-2"
                >
                  Hapus
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableReward

import hadiah from '../../../../assets/gifts.svg'

import { useState } from 'react'
import Pagination from './Pagination'

const TableReward = ({ data, handleClickEdit, handleClickHapus }) => {
  const [allReward, setAllReward] = useState(data)
  const [start, setStart] = useState(0)

  const totalRender = 10

  const handlePrev = () => {
    setStart(start - totalRender)
  }

  const handleNext = () => {
    setStart(start + totalRender)
  }

  const handleFilterType = (e) => {
    switch (e.target.value) {
      case 'E-Money':
        let emoney = data.rewards.filter((t) => t.category === 'E_MONEY')
        setAllReward({ rewards: emoney })
        break
      case 'Cash Out':
        let cash = data.rewards.filter((t) => t.category === 'CASH_OUT')
        setAllReward({ rewards: cash })
        break
      case 'Digital Product':
        let digital = data.rewards.filter(
          (t) => t.category === 'DIGITAL_PRODUCT'
        )
        setAllReward({ rewards: digital })
        break
      default:
        setAllReward(data)
        break
    }
  }

  return (
    <div className="grid">
      <div className="inline my-2">
        <label className="inline mb-2 text-md font-bold text-purple font-roboto">
          Filter by Type:
        </label>
        <select
          onChange={handleFilterType}
          className="w-28 ml-4 h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
        >
          <option value="all" className="p-2">
            All
          </option>
          <option value="E-Money">E-Money / E-Wallet</option>
          <option value="Cash Out">Bank Transfer</option>
          <option value="Digital Product">Pulsa / Paket Data</option>
        </select>
      </div>

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
            {allReward.rewards.map((reward, idx) => {
              if (idx >= start && idx <= start + totalRender) {
                return (
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
                )
              }
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        prev={handlePrev}
        next={handleNext}
        start={start}
        len={allReward.rewards.length}
        totalRender={totalRender}
      />
    </div>
  )
}

export default TableReward

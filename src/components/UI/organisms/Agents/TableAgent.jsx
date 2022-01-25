import user from '../../../../assets/user.png'

import { useState } from 'react'
import Pagination from './Pagination'

const TableAgent = ({ data, handleClickEdit }) => {
  const [allAgent, setAllAgent] = useState(data)
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
      case 'Active':
        let active = data.agents.filter((t) => t.active === true)
        setAllAgent({ agents: active })
        break
      case 'Non-Active':
        let non = data.agents.filter((t) => t.active === false)
        setAllAgent({ agents: non })
        break
      default:
        setAllAgent(data)
        break
    }
  }

  return (
    <div className="grid">
      {/* Filter Option */}
      <div className="my-2">
        <label className="inline mb-2 text-sm font-bold text-purple font-roboto">
          Filter by Status:
        </label>
        <select
          onChange={handleFilterType}
          className="w-28 ml-4 h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
        >
          <option value="all" className="p-2">
            All
          </option>
          <option value="Active">Active</option>
          <option value="Non-Active">Non-Active</option>
        </select>
      </div>

      <div className="font-roboto">
        <table className="w-full float-right shadow-lg font-roboto">
          <thead>
            <tr>
              <th className="rounded-tl-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase"></th>

              <th className="rounded-tl-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                NAMA AGENT
              </th>

              <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                EMAIL
              </th>

              <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                POINTS
              </th>

              <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                STATUS
              </th>

              <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody>
            {allAgent.agents.map((agent, idx) => {
              if (idx >= start && idx <= start + totalRender) {
                return (
                  <tr key={agent.id} className="text-center">
                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <span className="text-gray-900 whitespace-no-wrap">
                        {agent.img !== '' ? (
                          <img
                            alt="avatar"
                            src={agent.img}
                            className="rounded-full w-10 h-10 float-right"
                          />
                        ) : (
                          <img
                            alt="avatar"
                            src={user}
                            className="rounded-full w-10 h-10 float-right"
                          />
                        )}
                      </span>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <span className="text-gray-900 whitespace-no-wrap">
                        {agent.name}
                      </span>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {agent.email}
                      </p>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {agent.points}
                      </p>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <span className="aria-hidden relative inline-block px-3 py-1 font-medium leading-tight">
                        {agent.active ? (
                          <span className="inset-0 opacity-70 bg-green rounded-2xl p-1.5 px-2">
                            Active
                          </span>
                        ) : (
                          <span className="inset-0 opacity-70 bg-red rounded-2xl p-1.5 px-2">
                            Non-active
                          </span>
                        )}
                      </span>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <span
                        onClick={() => handleClickEdit(agent.id)}
                        className="font-semibold text-darkgrey hover:bg-lightpurple rounded-full cursor-pointer p-2 mr-4"
                      >
                        Edit
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
        len={allAgent.agents.length}
        totalRender={totalRender}
      />
    </div>
  )
}

export default TableAgent

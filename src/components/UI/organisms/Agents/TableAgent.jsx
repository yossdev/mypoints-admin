import { useState } from 'react'
import EditAgent from './EditAgent'
import AddAgent from './AddAgent'

const TableAgent = (props) => {
  const [edit, setEdit] = useState(false)
  const [addAgent, setAddAgent] = useState(false)

  return (
    <div className="font-roboto">
      <button
        onClick={() => setAddAgent(true)}
        className="mb-3 mr-4 border-2 bg-purple hover:bg-darkpurple text-sm text-white font-roboto p-3 rounded-md"
      >
        + Tambah Agent
      </button>

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
          {props.data.agents.map((agent) => (
            <tr className="text-center">
              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <span className="text-gray-900 whitespace-no-wrap">
                  {props.data.agents.img !== '' ? (
                    <img
                      alt="avatar"
                      src={agent.img}
                      className="rounded-full w-10 h-10 float-right"
                    />
                  ) : (
                    <img
                      alt="avatar"
                      src="https://kredithptangcity.com/wp-content/uploads/2020/11/user.png"
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
                <span className="aria-hidden relative inline-block px-3 py-1 font-semibold leading-tight">
                  <span
                    aria-hidden
                    className={
                      agent.active === 'true'
                        ? 'absolute inset-0 opacity-50 bg-red rounded-full'
                        : 'absolute inset-0 opacity-50 bg-green rounded-full'
                    }
                  >
                    {agent.active === 'true' ? (
                      <span className="relative">Non-active</span>
                    ) : (
                      <span className="relative">Active</span>
                    )}
                  </span>
                </span>
              </td>

              <td className="py-3 border-b border-gray-200 bg-white text-sm">
                <span
                  onClick={() => setEdit(true)}
                  className="font-semibold text-darkgrey hover:bg-lightpurple rounded-full cursor-pointer p-2 mr-4"
                >
                  Edit
                </span>
                <span className="font-semibold text-red hover:bg-lightpurple rounded-full cursor-pointer p-2">
                  Hapus
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {edit && <EditAgent setEdit={setEdit} />}
      {addAgent && <AddAgent setAddAgent={setAddAgent} />}
    </div>
  )
}

export default TableAgent

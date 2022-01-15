import { useState } from 'react'
import EditAgent from './EditAgent'
import AddAgent from './AddAgent'

const TableAgent = () => {
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
          <tr className="text-center">
            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <span className="text-gray-900 whitespace-no-wrap">
                Nama Saya Adalah
              </span>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">
                agent1@gmail.com
              </p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">80</p>
            </td>

            <td className="py-3 border-b border-gray-200 bg-white text-sm">
              <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-green opacity-50 rounded-full"
                ></span>
                <span className="relative">Active</span>
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
        </tbody>
      </table>

      {edit && <EditAgent setEdit={setEdit} />}
      {addAgent && <AddAgent setAddAgent={setAddAgent} />}
    </div>
  )
}

export default TableAgent

import { useState } from 'react'
import ModalHistory from './ModalHistory'

const TableHistory = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div class="w-sm mx-80 absolute mt-40">
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-3">Agent</th>
              <th class="text-left p-3 px-3">Product</th>
              <th class="text-left p-3 px-3">Reward</th>
              <th class="text-left p-3 px-3">Point</th>
              <th class="text-left p-3 px-3">Type</th>
              <th class="text-left p-3 px-3">Status</th>
              <th class="text-left p-3 px-3">Action</th>
              <th></th>
            </tr>
            <tr class="border-b hover:bg-orange-100 bg-gray-100">
              <td class="p-3 px-3">
                <p>wawan</p>
              </td>
              <td class="p-3 px-3">
                <p>poco x3 pro</p>
              </td>{' '}
              <td class="p-3 px-3">
                <p>Link Aja 100000</p>
              </td>
              <td class="p-3 px-3">
                <p>1000</p>
              </td>
              <td class="p-3 px-3">
                <p>Debit</p>
              </td>
              <td class="p-3 px-3">
                <p>Pending</p>
              </td>
              <td class="p-3 px-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpenModal(true)}
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {openModal ? <ModalHistory setOpenModal={setOpenModal} /> : null}
    </div>
  )
}

export default TableHistory

import { useState } from 'react'
import ModalAgent from '../organisms/ModalAgent'

const ButtonAddAgents = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="sm:flex justify-end">
        <button
          className="absolute bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 
    rounded mt-20"
          onClick={() => setOpenModal(true)}
        >
          Add Agent
        </button>
      </div>
      {openModal ? <ModalAgent setOpenModal={setOpenModal} /> : null}
    </>
  )
}

export default ButtonAddAgents

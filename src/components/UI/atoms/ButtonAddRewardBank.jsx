import { useState } from 'react'
import ModalBankTransfer from '../organisms/ModalBankTransfer'

const ButtonAddRewardBank = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
      <div className="flex justify-end">
        <button
          className="absolute bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 
    rounded mt-20"
          onClick={() => setOpenModal(true)}
        >
          Add Reward
        </button>
      </div>
      {openModal ? <ModalBankTransfer setOpenModal={setOpenModal} /> : null}
    </>
    )
}

export default ButtonAddRewardBank

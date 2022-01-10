import React from 'react'
import { useState } from 'react'
import ModalProfile from '../organisms/ModalProfile'

const ButtonEditProfile = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="sm:flex justify-start">
        <button
          className="absolute bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 
      rounded"
          onClick={() => setOpenModal(true)}
        >
          Edit Profile
        </button>
      </div>
      {openModal ? <ModalProfile setOpenModal={setOpenModal} /> : null}
    </>
  )
}

export default ButtonEditProfile

import { useState } from 'react'
import ModalProduct from '../organisms/ModalProduct'

const ButtonAddProduct = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="sm:flex justify-end">
        <button
          className="absolute bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 
    rounded mt-20"
          onClick={() => setOpenModal(true)}
        >
          Add Product
        </button>
      </div>
      {openModal ? <ModalProduct setOpenModal={setOpenModal} /> : null}
    </>
  )
}

export default ButtonAddProduct

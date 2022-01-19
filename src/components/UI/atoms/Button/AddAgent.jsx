import React from 'react'

const AddAgent = ({ setAddAgent }) => {
  return (
    <>
      <button
        onClick={() => setAddAgent(true)}
        className="mb-3 mr-4 border-2 bg-purple hover:bg-darkpurple text-sm text-white font-roboto p-3 rounded-md"
      >
        + Tambah Agent
      </button>
    </>
  )
}

export default AddAgent

import React from 'react'

const DelReward = ({ setDelReward }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="w-2/6 mx-auto flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        <form className="mx-auto w-full items-center justify-center mb-4 rounded">
          <div className="text-lg text-center mb-4 font-roboto text-purple">
            <span>Yakin hapus hadiah ini?</span>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red opacity-80 hover:opacity-100 text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
            >
              Hapus
            </button>

            <button
              onClick={() => setDelReward(false)}
              className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DelReward

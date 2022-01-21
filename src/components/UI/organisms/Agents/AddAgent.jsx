import React from 'react'

const AddAgent = (props) => {
  const { setAddAgent, onChangeAgent, pass, handleSubmitAddAgent, error } =
    props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="w-2/6 mx-auto flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        <div className="text-center pb-4">
          <h1 className="text-xl text-purple font-bold font-roboto">
            Tambah Agent
          </h1>
        </div>

        <hr />

        <form
          onSubmit={handleSubmitAddAgent}
          method="post"
          className="mx-auto w-full items-center justify-center my-4 rounded"
        >
          <div className="mb-2">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Nama Agent <span className="text-red">*</span>
            </label>
            <input
              onChange={onChangeAgent}
              name="name"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="input"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Email <span className="text-red">*</span>
            </label>
            <input
              onChange={onChangeAgent}
              name="email"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="email"
              placeholder="johndoe@mail.com"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Password <span className="text-red">*</span>
            </label>
            <input
              onChange={onChangeAgent}
              name="password"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
              placeholder="********"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Confirm Password <span className="text-red">*</span>
            </label>
            <input
              onChange={onChangeAgent}
              name="confirmPassword"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
              placeholder="********"
              required
            />
          </div>

          <div className="my-2 text-sm text-red italic">* Wajib diisi</div>

          {error ? (
            <div className="my-4 text-sm text-center text-red italic">
              Terjadi kesalahan, silahkan coba lagi!
            </div>
          ) : null}

          <div className="text-center">
            <button
              type="submit"
              disabled={pass.password !== pass.confirmPassword}
              className={
                pass.password !== pass.confirmPassword
                  ? 'opacity-50 bg-purple text-white text-sm font-roboto py-3 px-4 rounded-md'
                  : 'bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 rounded-md'
              }
            >
              Tambah
            </button>

            <button
              onClick={() => setAddAgent(false)}
              className="ml-4 bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAgent

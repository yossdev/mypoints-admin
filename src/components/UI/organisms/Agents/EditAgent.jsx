const EditAgent = (props) => {
  const {
    data,
    setEdit,
    onChangeEditAgent,
    pass,
    handleSubmitEditAgent,
    error,
  } = props

  const agent = data.agents

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="mx-auto flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        <form
          onSubmit={handleSubmitEditAgent}
          method="put"
          className="mx-auto w-full text-center items-center justify-center mb-4 rounded"
        >
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Status
            </label>
            <select
              onChange={onChangeEditAgent}
              name="active"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            >
              <option value={true}>Active</option>
              <option value={false}>Non-Active</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Password
            </label>
            <input
              onChange={onChangeEditAgent}
              name="password"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
              placeholder="********"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Confirm Password
            </label>
            <input
              onChange={onChangeEditAgent}
              name="confirmPassword"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
              placeholder="********"
            />
          </div>

          {error ? (
            <div className="mt-6 text-sm text-center text-red italic">
              Terjadi kesalahan, silahkan coba lagi!
            </div>
          ) : null}

          <button
            type="submit"
            disabled={pass.password !== pass.confirmPassword}
            className={
              pass.password !== pass.confirmPassword
                ? 'opacity-50 bg-purple text-white text-sm font-roboto py-3 px-4 rounded-md'
                : 'bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 rounded-md'
            }
          >
            Simpan Perubahan
          </button>

          <button
            onClick={() => setEdit(false)}
            className="ml-4 bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditAgent

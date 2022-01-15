const EditAgent = ({ setEdit }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="mx-auto flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        <form className="mx-auto w-full text-center items-center justify-center mb-4 rounded">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Status
            </label>
            <select
              name="status"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
            >
              <option>Active</option>
              <option>Non-Active</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Password
            </label>
            <input
              name="pass"
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="password"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
          >
            Simpan Perubahan
          </button>

          <button
            onClick={() => setEdit(false)}
            className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditAgent

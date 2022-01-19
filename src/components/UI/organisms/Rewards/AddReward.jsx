const AddReward = (props) => {
  const {
    setAddReward,
    // reqReward,
    onChangeAddReward,
    handleSubmitAddReward,
    handleImg,
    error,
  } = props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="w-2/6 mx-auto flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        {/* For Debuging
        <div>{JSON.stringify(reqReward, null, 2)}</div> */}

        <form
          onSubmit={handleSubmitAddReward}
          className="mx-auto w-full items-center justify-center mb-4 rounded"
        >
          <div>
            <label className="block mb-2 text-sm font-bold text-purple font-roboto">
              Judul Hadiah
            </label>
            <input
              name="title"
              onChange={onChangeAddReward}
              className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              type="text"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Points
              </label>
              <div className="relative">
                <input
                  name="points"
                  onChange={onChangeAddReward}
                  className="h-10 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
            </div>

            <div className="w-full md:w-2/4 px-3">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Nominal
              </label>
              <input
                name="value"
                onChange={onChangeAddReward}
                className="h-10 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
              />
            </div>
          </div>

          <div>
            <label className="inline mb-2 text-sm font-bold text-purple font-roboto">
              Gambar
            </label>
            <input
              onChange={handleImg}
              className="pl-2 font-light text-sm"
              type="file"
              accept=".jpg, .jpeg, .png"
            />
          </div>

          {error ? (
            <div className="mt-6 text-sm text-center text-red italic">
              Terjadi kesalahan, silahkan coba lagi!
            </div>
          ) : null}

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
            >
              Tambah
            </button>

            <button
              onClick={() => setAddReward(false)}
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

export default AddReward

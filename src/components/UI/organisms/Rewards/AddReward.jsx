const AddReward = (props) => {
  const {
    setAddReward,
    onChangeAddReward,
    handleSubmitAddReward,
    handleImg,
    error,
  } = props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="w-2/6 mx-auto flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        <div className="text-center pb-4">
          <h1 className="text-xl text-purple font-bold font-roboto">
            Tambah Reward
          </h1>
        </div>

        <hr />

        <form
          onSubmit={handleSubmitAddReward}
          method="post"
          className="mx-auto w-full items-center justify-center my-4 rounded"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Nama Reward <span className="text-red">*</span>
              </label>
              <div className="relative">
                <input
                  name="title"
                  onChange={onChangeAddReward}
                  className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-2/4 px-3">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Kategori <span className="text-red">*</span>
              </label>
              <select
                onChange={onChangeAddReward}
                name="category"
                className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
              >
                <option value="kategori" selected>
                  Pilih Kategori
                </option>
                <option value="E_MONEY">E-Money</option>
                <option value="CASH_OUT">Money Transfer</option>
                <option value="DIGITAL_PRODUCT">Pulsa / Paket Data</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Points <span className="text-red">*</span>
              </label>
              <div className="relative">
                <input
                  name="points"
                  onChange={onChangeAddReward}
                  className="h-10 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  defaultValue={1}
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-2/4 px-3">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Nominal <span className="text-red">*</span>
              </label>
              <input
                name="value"
                onChange={onChangeAddReward}
                className="h-10 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                defaultValue={1}
                min="1"
                required
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

          <div className="mt-4 text-sm text-red italic">* Wajib diisi</div>

          {error ? (
            <div className="my-4 text-sm text-center text-red italic">
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

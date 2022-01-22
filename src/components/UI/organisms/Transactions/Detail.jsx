const Detail = (props) => {
  const { setDetail, reqDetail, handleApprove, handleReject, error } = props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="mx-auto w-2/6 flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        {/* For Debuging */}
        {/* <div>{JSON.stringify(reqDetail, null, 2)}</div> */}

        {reqDetail.nota_img !== null ? (
          // KLAIM POINT
          <div className="mx-auto items-center justify-center mb-4 rounded">
            <div className="text-center pb-4">
              <h1 className="text-xl text-purple font-bold font-roboto">
                Klaim Point
              </h1>
            </div>

            <hr />

            <div className="my-4">
              <label className="block mb-4 text-sm font-bold text-purple font-roboto">
                Bukti Faktur
              </label>
              <img
                alt="faktur"
                src={reqDetail.nota_img}
                className="max-w-28 -mt-3"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Point yang Didapatkan
              </label>
              <span className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight font-bold text-green border rounded">
                +{reqDetail.points}
              </span>
            </div>

            {error ? (
              <div className="my-4 text-sm text-center text-red italic">
                Terjadi kesalahan, silahkan coba lagi!
              </div>
            ) : null}

            {/* LOGIC BUTTON CONDITION BY STATUS */}
            {reqDetail.status === 'Pending' ? (
              <div className="text-center mt-10">
                <button
                  onClick={handleApprove}
                  className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
                >
                  Approve
                </button>

                <button
                  onClick={handleReject}
                  className="bg-red hover:bg-darkred text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md"
                >
                  Reject
                </button>

                <button
                  onClick={() => setDetail(false)}
                  className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
                >
                  Kembali
                </button>
              </div>
            ) : reqDetail.status === 'Approved' ? (
              <div className="text-center mt-10">
                <div className="my-2 text-md text-purple italic">
                  Klaim sudah di approve!
                </div>

                <button className="bg-purple opacity-70 text-white text-sm font-roboto py-3 px-4 mr-4 cursor-default rounded-md">
                  Approved!
                </button>

                <button
                  onClick={() => setDetail(false)}
                  className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
                >
                  Kembali
                </button>
              </div>
            ) : (
              <div className="text-center mt-10">
                <div className="my-2 text-md text-red italic">
                  Klaim ditolak!
                </div>

                <button className="bg-red opacity-70 text-white text-sm font-roboto py-3 px-4 mr-4 cursor-default rounded-md">
                  Rejected!
                </button>

                <button
                  onClick={() => setDetail(false)}
                  className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
                >
                  Kembali
                </button>
              </div>
            )}
          </div>
        ) : (
          // REDEEM HADIAH
          <div className="mx-auto items-center justify-center mb-4 rounded">
            <div className="text-center pb-4">
              <h1 className="text-xl text-purple font-bold font-roboto">
                Redeem Hadiah
              </h1>
            </div>

            <hr />

            <div className="flex flex-wrap -mx-3 my-4">
              <div className="w-full md:w-3/5 px-3 mb-6 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                  Hadiah
                </label>
                <div className="relative">
                  <span className="h-10 px-3 py-2 mb-3 block w-full text-gray-700 border border-gray-200 rounded">
                    {reqDetail.title}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-2/5 px-3">
                <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                  Point yang Ditukar
                </label>
                <span className="h-10 px-3 py-2 mb-3 block w-full font-bold text-red border border-gray-200 rounded">
                  -{reqDetail.points}
                </span>
              </div>

              <div className="w-full md:w-5/5 px-3 mt-3">
                <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                  Deskripsi
                </label>
                <span className="h-10 px-3 py-2 mb-3 block w-full text-gray-700 border border-gray-200 rounded">
                  {reqDetail.redeem_desc}
                </span>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href={reqDetail.redeem_invoice_url}
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-purple hover:bg-darkpurple text-white text-sm font-roboto py-3 px-4 mr-4 rounded-md">
                  Bayar Hadiah
                </button>
              </a>

              <button
                onClick={() => setDetail(false)}
                className="bg-white hover:bg-lightpurple text-red text-sm font-roboto py-3 px-4 rounded-md"
              >
                Kembali
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Detail

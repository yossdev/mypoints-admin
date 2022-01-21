const Detail = (props) => {
  const { setDetail, reqDetail, handleApprove, handleReject } = props

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-700 bg-opacity-50">
      <div className="mx-auto w-2/6 flex-col items-center my-1 pt-4 px-8 bg-white shadow border border-purple rounded-lg">
        {/* For Debuging */}
        {/* <div>{JSON.stringify(reqDetail, null, 2)}</div> */}

        {reqDetail.nota_img !== null ? (
          <div className="mx-auto text-center items-center justify-center mb-4 rounded">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
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
          </div>
        ) : (
          <div className="mx-auto text-center items-center justify-center mb-4 rounded">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Deskripsi
              </label>
              <span className="w-1/2 h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded">
                {reqDetail.redeem_desc}
              </span>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Hadiah
              </label>
              <span className="w-1/2 h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded">
                {reqDetail.title}
              </span>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-purple font-roboto">
                Point yang Ditukarkan
              </label>
              <span className="w-full h-10 px-3 py-2 mb-3 text-sm leading-tight font-bold text-red border rounded">
                -{reqDetail.points}
              </span>
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

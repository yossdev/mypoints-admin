import { PersonAddIcon, ChecklistIcon, GiftIcon } from '@primer/octicons-react'

const CaraDapatPoints = () => {
  return (
    <>
      <div className="mx-auto mt-36 pb-2 w-fit h-12 border-b-2 border-purple">
        <h1 className="text-center text-2xl font-bold leading-tight text-purple font-poppins">
          Bagaimana cara mendapatkan MyPoints?
        </h1>
      </div>

      <div className="mt-6 mx-auto w-4/6 grid grid-cols-3 gap-14">
        {/* <!--Card 1--> */}
        <div className="text-center">
          <div className="px-6 py-4">
            <PersonAddIcon size={24} fill="#5F2788" />
            <div className="font-bold font-roboto text-purple mt-2 mb-2">
              Daftar Jadi Agen
            </div>
            <p className="font-roboto font-light">
              Untuk mendapatkan saldo MyPoints, kamu harus terdaftar jadi salah
              satu agen terlebih dulu.
            </p>
          </div>
        </div>

        {/* <!--Card 2--> */}
        <div className="text-center">
          <div className="px-6 py-4">
            <ChecklistIcon size={24} fill="#5F2788" />
            <div className="font-bold font-roboto text-purple mt-2 mb-2">
              Lakukan Penjualan
            </div>
            <p className="font-roboto font-light">
              Jual salah satu produk yang ada, kemudian nantinya kamu akan
              mendapatkan saldo MyPoints.
            </p>
          </div>
        </div>

        {/* <!--Card 3--> */}
        <div className="text-center">
          <div className="px-6 py-4">
            <GiftIcon size={24} fill="#5F2788" />
            <div className="font-bold font-roboto text-purple mt-2 mb-2">
              Tukarkan Hadiahmu!
            </div>
            <p className="font-roboto font-light">
              Setelah itu, kamu bisa menukarkan saldo MyPoints-mu dengan hadiah
              tertentu.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaraDapatPoints

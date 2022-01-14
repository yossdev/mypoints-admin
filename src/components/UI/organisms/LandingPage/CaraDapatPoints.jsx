import {
  PersonAddIcon,
  ChecklistIcon,
  GiftIcon,
  MailIcon,
} from '@primer/octicons-react'

const CaraDapatPoints = () => {
  return (
    <>
      <div className="mx-auto mt-36 pb-2 w-fit h-12 border-b-2 border-purple">
        <h1 className="text-center text-2xl font-bold leading-tight text-purple font-Poppins">
          Apa saja tugas Admin MyPoints?
        </h1>
      </div>

      <div className="mt-6 mx-auto w-4/6 grid grid-cols-2 gap-14">
        {/* <!--Card 1--> */}
        <div className="text-center">
          <div className="px-6 py-4">
            <PersonAddIcon size={24} fill="#5F2788" />
            <div className="font-bold font-Roboto text-purple mt-2 mb-2">
              Mendaftar Agen
            </div>
            <p className="font-Roboto font-light">
              Daftarkan agen yang ingin join dalam usahamu.
            </p>
          </div>
        </div>

        {/* <!--Card 2--> */}
        <div className="text-center">
          <div className="px-6 py-4">
            <ChecklistIcon size={24} fill="#5F2788" />
            <div className="font-bold font-Roboto text-purple mt-2 mb-2">
              Menambahkan Data Produk
            </div>
            <p className="font-Roboto font-light">
              Jika ada produk baru, admin bisa menambahkan produk data produk
              yang akan dijual oleh agen dengan ketentuan poin masing-masing
              produk.
            </p>
          </div>
        </div>

        {/* <!--Card 3--> */}
        <div className="text-center">
          <div className="px-6 py-4">
            <GiftIcon size={24} fill="#5F2788" />
            <div className="font-bold font-Roboto text-purple mt-2 mb-2">
              Menambahkan data hadiah
            </div>
            <p className="font-Roboto font-light">
              Admin dapat menambahkan data hadiah yang bisa agen tukarkan dengan
              poin yang didapatnya.
            </p>
          </div>
        </div>

        {/* <!--Card 4--> */}
        <div className="text-center">
          <div className="px-6 py-4">
            <MailIcon size={24} fill="#5F2788" />
            <div className="font-bold font-Roboto text-purple mt-2 mb-2">
              Mengonfirmasi penukaran hadiah
            </div>
            <p className="font-Roboto font-light">
              Admin dapat mengonfirmasi hadiah apa yang ditukarkan oleh agen
              dengan poin yang didapatnya.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaraDapatPoints

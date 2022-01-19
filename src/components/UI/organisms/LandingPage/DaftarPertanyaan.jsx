import { useState } from 'react'
import { ChevronDownIcon } from '@primer/octicons-react'

const DaftarPertanyaan = () => {
  const [jawab1, setJawab1] = useState(false)
  const [jawab2, setJawab2] = useState(false)
  const [jawab3, setJawab3] = useState(false)

  return (
    <>
      <div className="mx-auto mt-36 pb-2 w-fit h-12 border-b-2 border-purple">
        <h1 className="text-center text-2xl font-bold leading-tight text-purple font-Poppins">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="mx-auto p-4 max-w-2xl sm:p-8">
        <div className="flow-root">
          <ul className="divide-y divide-gray-200">
            <li className="py-3 sm:py-4">
              <div
                onClick={() => setJawab1(!jawab1)}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">Apa itu MyPoints?</p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {jawab1 ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  MyPoints merupakan bentuk apresiasi dari admin kepada para
                  agen. Agen mendapatkan keuntungan dari setiap transaksi dengan
                  mendapatkan saldo MyPoints yang dapat ditukarkan dengan
                  berbagai hadiah menarik.
                </p>
              ) : null}
            </li>

            <li className="py-3 sm:py-4">
              <div
                onClick={() => setJawab2(!jawab2)}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">
                    Apa itu MyPoints Admin?
                  </p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {jawab2 ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  Seperti yang dijelaskan sebelumnya. MyPoints Admin adalah
                  website aplikasi yang digunakan admin perusahaan retail yang
                  menjual berbagai produk yang dimana admin dapat mendaftarkan
                  agen yang ingin bergabung, mendaftarkan agen yang ingin
                  bergabung,dan menambahkan hadiah yang nantinya bisa agen
                  tukarkan dengan poin yang didapatnya.
                </p>
              ) : null}
            </li>

            <li className="py-3 sm:py-4">
              <div
                onClick={() => setJawab3(!jawab3)}
                className="flex items-center space-x-4 hover:underline cursor-pointer"
              >
                <div className="flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="font-roboto text-purple">
                    Bagaimana cara admin memotivasi agen agar penjualan produk
                    meningkat ?
                  </p>
                </div>
                <ChevronDownIcon
                  size={20}
                  className="inline-flex items-center"
                  fill="#5F2788"
                />
              </div>
              {jawab3 ? (
                <p className="ml-4 mt-4 font-roboto font-light text-sm">
                  Caranya mengiming-imingi agen dengan hadiah menarik yang akan
                  diberikan admin, dengan cara tersebut agen dapat
                  berlomba-lomba menjual produk. Yang dimana penjualan produk
                  dapat ditukarkan dengan poin dan poin tersebut bisa agen
                  redeem dengan hadiah menarik yang disediakan oleh agen.
                </p>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default DaftarPertanyaan

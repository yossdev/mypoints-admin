import MainLoading from '../../atoms/Spinner/MainLoading'
import Error from '../Error'

import { useQuery } from '@apollo/client'
import { GET_ADMIN } from '../../../../GraphQL/Query'

const Greeting = () => {
  const { data, loading, error } = useQuery(GET_ADMIN, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  const admin = data.admins[0]
  const name = admin.name.charAt(0).toUpperCase() + admin.name.slice(1)

  return (
    <div
      style={{ width: '100%' }}
      className="inline-block mb-8 rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <div className="mt-3 ml-3 px-3 pb-6 pt-2">
        <h3 className="text-2xl text-purple font-bold font-roboto">
          Selamat Datang, {name} Xiaomi (misal)
        </h3>
        <p className="mt-2 font-roboto font-light">
          Hallo, semoga harimu menyenangkan ya. Semangat menjadi Admin!
        </p>
      </div>
    </div>
  )
}

export default Greeting

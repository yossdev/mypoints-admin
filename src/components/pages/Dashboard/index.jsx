import { HomeIcon } from '@primer/octicons-react'

import Greeting from '../../UI/organisms/Dashboard/Greetings'
import Summary from '../../UI/organisms/Dashboard/Summary'
import LatestTransaction from '../../UI/organisms/Dashboard/LatestTransaction'

import { useQuery } from '@apollo/client'
import { GET_SUMMARY, GET_TRANSACTION } from '../../../GraphQL/Query'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

const Dashboard = () => {
  document.title = 'Dashboard'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_SUMMARY, {
    notifyOnNetworkStatusChange: true,
  })

  const {
    data: recentTransaction,
    loading: loadingTransaction,
    error: errorTransaction,
  } = useQuery(GET_TRANSACTION, {
    variables: { limit: 5 },
    notifyOnNetworkStatusChange: true,
  })

  if (loading || loadingTransaction) return <MainLoading />
  if (error || errorTransaction) return <Error />

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <HomeIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Dashboard</span>
      </div>

      <div
        style={{
          marginTop: '20px',
          marginRight: '15px',
          width: '80%',
          float: 'right',
          padding: '20px',
        }}
      >
        <Greeting />
        <Summary summary={data} />
        <LatestTransaction data={recentTransaction} />
      </div>
    </>
  )
}

export default Dashboard

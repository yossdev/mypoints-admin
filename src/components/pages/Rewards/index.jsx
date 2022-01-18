import { GiftIcon } from '@primer/octicons-react'
import TableReward from '../../UI/organisms/Rewards/TableRewards'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

import { useQuery } from '@apollo/client'
import { GET_REWARD } from '../../../GraphQL/Query'

const Reward = () => {
  document.title = 'Reward'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error } = useQuery(GET_REWARD, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <MainLoading />
  if (error) return <Error />

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <GiftIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Rewards</span>
      </div>

      <div
        style={{
          marginTop: '30px',
          width: '80%',
          padding: '20px',
          float: 'right',
        }}
      >
        <TableReward data={data} />
      </div>
    </>
  )
}

export default Reward

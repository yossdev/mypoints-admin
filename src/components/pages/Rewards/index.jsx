import { GiftIcon } from '@primer/octicons-react'
import TableReward from '../../UI/organisms/Rewards/TableRewards'

const Reward = () => {
  document.title = 'Reward'
  document.body.style = 'background: #EEEEEE;'

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
          border: 'red solid 1px',
        }}
      >
        <TableReward />
      </div>
    </>
  )
}

export default Reward

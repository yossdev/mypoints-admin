import { GiftIcon } from '@primer/octicons-react'

const Reward = () => {
  document.title = 'Reward'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <GiftIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Rewards</span>
      </div>
    </>
  )
}

export default Reward

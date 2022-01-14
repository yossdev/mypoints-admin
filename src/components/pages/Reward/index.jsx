import { GiftIcon } from '@primer/octicons-react'

const Reward = () => {
  document.title = 'Reward'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-Roboto">
        <GiftIcon size={16} fill="darkgrey" />
        <span className="text-lg text-darkgrey font-bold">/ Reward</span>
      </div>
    </>
  )
}

export default Reward

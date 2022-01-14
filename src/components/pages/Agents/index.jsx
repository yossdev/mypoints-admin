import { PersonIcon } from '@primer/octicons-react'

const Agents = () => {
  document.title = 'Agents'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-Roboto">
        <PersonIcon size={16} fill="darkgrey" />
        <span className="text-lg text-darkgrey font-bold">/ Agents</span>
      </div>
    </>
  )
}

export default Agents

import { PersonIcon } from '@primer/octicons-react'
import TableAgent from '../../UI/organisms/Agents/TableAgent'

const Agents = () => {
  document.title = 'Agents'
  document.body.style = 'background: #EEEEEE;'

  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <PersonIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Agents</span>
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
        <TableAgent />
      </div>
    </>
  )
}

export default Agents

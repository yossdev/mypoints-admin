import { ChecklistIcon } from '@primer/octicons-react'

const Transactions = () => {
  return (
    <>
      <div className="ml-80 pt-3 font-roboto">
        <ChecklistIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Transactions</span>
      </div>

      <div
        style={{
          marginTop: '30px',
          width: '80%',
          padding: '20px',
          float: 'right',
          border: 'red solid 1px',
        }}
      ></div>
    </>
  )
}

export default Transactions

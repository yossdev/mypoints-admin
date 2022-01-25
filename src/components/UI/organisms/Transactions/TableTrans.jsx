import moment from 'moment'
import { useState } from 'react'
import Pagination from './Pagination'

const TableTrans = ({ data, handleClickDetail }) => {
  const [allTransaction, setAllTransaction] = useState(data)
  const [start, setStart] = useState(0)

  const totalRender = 10

  const handlePrev = () => {
    setStart(start - totalRender)
  }

  const handleNext = () => {
    setStart(start + totalRender)
  }

  const handleFilterType = (e) => {
    switch (e.target.value) {
      case 'Redeem':
        let redeem = data.transactions.filter((t) => t.type === 'Credit')
        setAllTransaction({ transactions: redeem })
        break
      case 'Claim':
        let claim = data.transactions.filter((t) => t.type === 'Debit')
        setAllTransaction({ transactions: claim })
        break
      default:
        setAllTransaction(data)
        break
    }
  }

  return (
    <div className="grid">
      {/* Filter Option */}
      <div className="my-2">
        <label className="inline mb-2 text-sm font-bold text-purple font-roboto">
          Filter by Type:
        </label>
        <select
          onChange={handleFilterType}
          className="w-28 ml-4 h-10 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded"
        >
          <option value="all" className="p-2">
            All
          </option>
          <option value="Redeem">Redeem</option>
          <option value="Claim">Claim</option>
        </select>
      </div>

      <div className="font-roboto">
        <table className="w-full float-right shadow-lg font-roboto">
          <thead>
            <tr>
              <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                NAMA AGEN
              </th>

              <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                TYPE
              </th>

              <th className="py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                TITLE
              </th>

              <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                POINTS
              </th>

              <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                DATE
              </th>

              <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                STATUS
              </th>

              <th className="rounded-tr-lg py-3 border-b-2 border-gray-200 bg-white text-xs font-semibold text-purple uppercase">
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody>
            {allTransaction.transactions.map((transaction, idx) => {
              if (idx >= start && idx <= start + totalRender) {
                return (
                  <tr key={transaction.id} className="text-center">
                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {transaction.agent.name}
                      </p>
                    </td>

                    <td className="-pl-6 py-3 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {transaction.type === 'Debit' ? (
                          <span>Klaim Point</span>
                        ) : (
                          <span>Redeem Hadiah</span>
                        )}
                      </p>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {transaction.title}
                      </p>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <p
                        className={
                          transaction.type === 'Debit'
                            ? 'text-green'
                            : transaction.type === 'Credit'
                            ? 'text-red'
                            : ''
                        }
                      >
                        {transaction.type === 'Debit' ? (
                          <span>+{transaction.points}</span>
                        ) : (
                          <span>-{transaction.points}</span>
                        )}
                      </p>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {moment(transaction.updated_at).format('LL')}
                      </p>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 text-gray-700 leading-tight">
                        <span
                          aria-hidden
                          className={
                            transaction.status === 'Pending'
                              ? 'absolute inset-0 opacity-50 bg-yellow rounded-full'
                              : transaction.status === 'Settled' ||
                                transaction.status === 'Approved'
                              ? 'absolute inset-0 opacity-50 bg-green rounded-full'
                              : transaction.status === 'Rejected' ||
                                transaction.status === 'Expired'
                              ? 'absolute inset-0 opacity-50 bg-red rounded-full'
                              : ''
                          }
                        />
                        <span className="relative">{transaction.status}</span>
                      </span>
                    </td>

                    <td className="py-3 border-b border-gray-200 bg-white text-sm">
                      <span
                        onClick={() => handleClickDetail(transaction.id)}
                        className="font-semibold text-darkgrey hover:bg-lightpurple rounded-full cursor-pointer p-2"
                      >
                        Detail
                      </span>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        prev={handlePrev}
        next={handleNext}
        start={start}
        len={allTransaction.transactions.length}
        totalRender={totalRender}
      />
    </div>
  )
}

export default TableTrans

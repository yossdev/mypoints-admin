import moment from 'moment'

const TableTrans = ({ data, handleClickDetail }) => {
  return (
    <div className="font-roboto">
      <table className="w-full float-right shadow-lg font-roboto">
        <thead>
          <tr>
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
          {data.transactions.map((transaction) => (
            <tr key={transaction.id} className="text-center">
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
                  {moment(transaction.created_at).format('LL')}
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
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableTrans

import { ChecklistIcon } from '@primer/octicons-react'

import TableTrans from '../../UI/organisms/Transactions/TableTrans'
import Detail from '../../UI/organisms/Transactions/Detail'

import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_TRANSACTION } from '../../../GraphQL/Query'

import axios from 'axios'
import useJwtDecode from '../../../Hooks/useJwtDecode'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

const Transactions = () => {
  document.title = 'Transactions'
  document.body.style = 'background: #EEEEEE;'

  const { data, loading, error, refetch } = useQuery(GET_TRANSACTION, {
    notifyOnNetworkStatusChange: true,
  })

  const [transactionID, setTransactionID] = useState('')

  const JWT = useJwtDecode()
  const adminId = JWT.decoded.sub
  const apiChangeStatus = `https://server.mypoints.site/api/v1/admin/${adminId}/transactions/claims`

  const detailBody = {
    title: '',
    points: 0,
    redeem_desc: '',
    nota_img: '',
    redeem_invoice_url: '',
    status: '',
  }

  const approveBody = {
    id: transactionID,
    status: 'Approved',
  }

  const rejectBody = {
    id: transactionID,
    status: 'Rejected',
  }

  const [detail, setDetail] = useState(false)
  const [reqDetail, setReqDetail] = useState(detailBody)
  // const [reqApprove, setReqApprove] = useState(approveBody)
  // const [reqReject, setReqReject] = useState(rejectBody)

  const [errorAxios, setErrorAxios] = useState()
  const [loadingAxios, setLoadingAxios] = useState(false)

  const handleClickDetail = (detailId) => {
    const transaction = data.transactions.find(
      (transaction) => transaction.id === detailId
    )

    setReqDetail({
      ...reqDetail,
      id: transaction.id,
      title: transaction.title,
      points: transaction.points,
      redeem_desc: transaction.redeem_desc,
      nota_img: transaction.nota_img,
      redeem_invoice_url: transaction.redeem_invoice_url,
      status: transaction.status,
    })

    setDetail(true)
    setTransactionID(detailId)
  }

  const handleApprove = (e) => {
    e.preventDefault()
    setLoadingAxios(true)

    axios
      .put(apiChangeStatus, approveBody, {
        headers: { Authorization: `Bearer ${JWT.token}` },
      })
      .then((resp) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setLoadingAxios(false)
        setDetail(false)
      })
  }

  const handleReject = (e) => {
    e.preventDefault()
    setLoadingAxios(true)

    axios
      .put(apiChangeStatus, rejectBody, {
        headers: { Authorization: `Bearer ${JWT.token}` },
      })
      .then((resp) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setLoadingAxios(false)
        setDetail(false)
      })
  }

  if (loading || loadingAxios) return <MainLoading />
  if (error) return <Error />

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
      >
        <TableTrans data={data} handleClickDetail={handleClickDetail} />
      </div>

      {detail && (
        <Detail
          setDetail={setDetail}
          reqDetail={reqDetail}
          error={errorAxios}
          handleApprove={handleApprove}
          handleReject={handleReject}
        />
      )}
    </>
  )
}

export default Transactions

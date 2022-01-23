import { GiftIcon } from '@primer/octicons-react'

import BtnAddReward from '../../UI/atoms/Button/AddReward'
import TableReward from '../../UI/organisms/Rewards/TableRewards'
import AddReward from '../../UI/organisms/Rewards/AddReward'
import EditReward from '../../UI/organisms/Rewards/EditReward'
import DelReward from '../../UI/organisms/Rewards/DelReward'

import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REWARD } from '../../../GraphQL/Query'

import axios from 'axios'
import useJwtDecode from '../../../Hooks/useJwtDecode'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

const Reward = () => {
  document.title = 'Reward'
  document.body.style = 'background: #EEEEEE;'

  const [addReward, setAddReward] = useState(false)
  const [editReward, setEditReward] = useState(false)
  const [delReward, setDelReward] = useState(false)
  const [rewardID, setRewardID] = useState()

  const { data, loading, error, refetch } = useQuery(GET_REWARD, {
    notifyOnNetworkStatusChange: true,
  })

  const JWT = useJwtDecode()
  const adminId = JWT.decoded.sub
  const apiAddReward = `https://server.mypoints.site/api/v1/reward/${adminId}`
  const apiEditReward = `https://server.mypoints.site/api/v1/reward/${adminId}/${rewardID}`
  const apiDeleteReward = `https://server.mypoints.site/api/v1/reward/${adminId}/${rewardID}`

  const rewardBody = {
    admin_id: adminId,
    img: '',
    points: 0,
    title: '',
    value: 0,
  }

  const [image, setImage] = useState('')
  const [reqReward, setReqReward] = useState(rewardBody)
  const [errorAxios, setErrorAxios] = useState()
  const [loadingAxios, setLoadingAxios] = useState(false)

  const onChangeAddReward = (e) => {
    const value = e.target.value

    if (e.target.name === 'points') {
      setReqReward({ ...reqReward, [e.target.name]: parseInt(value) })
    } else if (e.target.name === 'value') {
      setReqReward({ ...reqReward, [e.target.name]: parseInt(value) })
    } else {
      setReqReward({ ...reqReward, [e.target.name]: value })
    }
  }

  const onChangeEditReward = (e) => {
    const value = e.target.value

    if (e.target.name === 'points') {
      setReqReward({ ...reqReward, [e.target.name]: parseInt(value) })
    } else if (e.target.name === 'value') {
      setReqReward({ ...reqReward, [e.target.name]: parseInt(value) })
    } else {
      setReqReward({ ...reqReward, [e.target.name]: value })
    }
  }

  const handleClickEdit = (rewardId) => {
    const reward = data.rewards.find(
      (reward) => reward.id === parseInt(rewardId)
    )

    setReqReward({
      ...reqReward,
      points: reward.points,
      title: reward.title,
      value: reward.value,
    })

    setRewardID(rewardId)
    setEditReward(true)
  }

  const handleClickHapus = (rewardId) => {
    const reward = data.rewards.find(
      (reward) => reward.id === parseInt(rewardId)
    )

    setReqReward({
      ...reqReward,
      points: reward.points,
      title: reward.title,
      value: reward.value,
    })

    setRewardID(rewardId)
    setDelReward(true)
  }

  const handleImg = (e) => {
    setImage(e.target.files[0])
  }

  // upload image to cloudinary
  const cloudinary = async () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'mypoints_media')
    data.append('cloud_name', 'mypoints')
    data.append('secure', true)

    try {
      const resp = await axios.post(
        'https://api.cloudinary.com/v1_1/mypoints/image/upload',
        data
      )
      return resp
    } catch (err) {
      return err.json()
    }
  }

  const handleSubmitAddReward = async (e) => {
    e.preventDefault()
    setLoadingAxios(true)

    let cld
    if (image !== '') {
      try {
        cld = await cloudinary()
      } catch (err) {
        setErrorAxios(err)
      }
    }

    axios
      .post(
        apiAddReward,
        { ...reqReward, img: cld?.data.url },
        {
          headers: { Authorization: `Bearer ${JWT.token}` },
        }
      )
      .then((response) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setReqReward(rewardBody)
        setAddReward(false)
        setLoadingAxios(false)
      })
  }

  const handleSubmitEditReward = async (e) => {
    e.preventDefault()
    setLoadingAxios(true)

    let cld
    if (image !== '') {
      try {
        cld = await cloudinary()
      } catch (err) {
        setErrorAxios(err)
      }
    }

    axios
      .put(
        apiEditReward,
        { ...reqReward, img: cld?.data.url },
        {
          headers: { Authorization: `Bearer ${JWT.token}` },
        }
      )
      .then((response) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setReqReward(rewardBody)
        setEditReward(false)
        setLoadingAxios(false)
      })
  }

  const handleDeleteReward = (e) => {
    e.preventDefault()
    setLoadingAxios(true)

    axios
      .delete(apiDeleteReward, {
        headers: { Authorization: `Bearer ${JWT.token}` },
      })
      .then((resp) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setDelReward(false)
        setLoadingAxios(false)
      })
  }

  if (loading || loadingAxios) return <MainLoading />
  if (error) return <Error />

  return (
    <>
      <div className="ml-80 pt-10 font-roboto">
        <GiftIcon size={20} fill="#5C5C5C" />
        <span className="text-lg text-darkgrey font-bold"> Rewards</span>
      </div>

      <div
        style={{
          marginTop: '20px',
          marginRight: '15px',
          width: '85%',
          float: 'right',
          padding: '20px',
        }}
      >
        <BtnAddReward setAddReward={setAddReward} />
        <TableReward
          data={data}
          handleClickHapus={handleClickHapus}
          handleClickEdit={handleClickEdit}
        />
      </div>

      {addReward && (
        <AddReward
          setAddReward={setAddReward}
          reqReward={reqReward}
          onChangeAddReward={onChangeAddReward}
          handleSubmitAddReward={handleSubmitAddReward}
          handleImg={handleImg}
          error={errorAxios}
        />
      )}

      {editReward && (
        <EditReward
          setEditReward={setEditReward}
          reqReward={reqReward}
          onChangeEditReward={onChangeEditReward}
          handleSubmitEditReward={handleSubmitEditReward}
          handleImg={handleImg}
          error={errorAxios}
        />
      )}

      {delReward && (
        <DelReward
          setDelReward={setDelReward}
          handleDeleteReward={handleDeleteReward}
          reqReward={reqReward}
        />
      )}
    </>
  )
}

export default Reward

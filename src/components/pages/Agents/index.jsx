import { PersonIcon } from '@primer/octicons-react'

import BtnAddAgent from '../../UI/atoms/Button/AddAgent'
import TableAgent from '../../UI/organisms/Agents/TableAgent'
import AddAgent from '../../UI/organisms/Agents/AddAgent'
import EditAgent from '../../UI/organisms/Agents/EditAgent'

import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_AGENT } from '../../../GraphQL/Query'

import axios from 'axios'
import useJwtDecode from '../../../Hooks/useJwtDecode'

import MainLoading from '../../UI/atoms/Spinner/MainLoading'
import Error from '../../UI/organisms/Error'

const Agents = () => {
  document.title = 'Agents'
  document.body.style = 'background: #EEEEEE;'

  const [addAgent, setAddAgent] = useState(false)
  const [editAgent, setEditAgent] = useState(false)

  const { data, loading, error, refetch } = useQuery(GET_AGENT, {
    notifyOnNetworkStatusChange: true,
  })

  const JWT = useJwtDecode()
  const adminId = JWT.decoded.sub
  const apiAddAgent = `https://server.mypoints.site/api/v1/${adminId}/agent`
  const apiEditAgent = `https://server.mypoints.site/api/v1/${adminId}/agent/update`

  const AddAgentBody = {
    active: true,
    admin_id: adminId,
    email: '',
    img: '',
    name: '',
    password: '',
  }

  const EditAgentBody = {
    active: true,
    id: '',
    password: '',
  }

  const [reqAgent, setReqAgent] = useState(AddAgentBody)
  const [reqEditAgent, setReqEditAgent] = useState(EditAgentBody)
  const [errorAxios, setErrorAxios] = useState()

  const onChangeAgent = (e) => {
    const value = e.target.value
    setReqAgent({ ...reqAgent, [e.target.name]: value })
  }

  const onChangeEditAgent = (e) => {
    const value = e.target.value

    if (e.target.name === 'active') {
      setReqEditAgent({ ...reqEditAgent, [e.target.name]: JSON.parse(value) })
    } else {
      setReqEditAgent({ ...reqEditAgent, [e.target.name]: value })
    }
  }

  const handleClickEdit = (agentId) => {
    const agent = data.agents.find((agent) => agent.id === agentId)

    console.log('ini data id', agentId)

    setReqEditAgent({
      ...reqEditAgent,
      id: agent.id,
      active: agent.active,
    })

    setEditAgent(true)
  }

  const handleSubmitAddAgent = (e) => {
    e.preventDefault()

    axios
      .post(apiAddAgent, reqEditAgent, {
        headers: { Authorization: `Bearer ${JWT.token}` },
      })
      .then((resp) => {
        // console.log(resp)
        refetch()
      })
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setAddAgent(false)
      })
  }

  const handleSubmitEditAgent = (e) => {
    e.preventDefault()

    axios
      .put(apiEditAgent, reqEditAgent, {
        headers: { Authorization: `Bearer ${JWT.token}` },
      })
      .then((resp) => refetch())
      .catch((err) => setErrorAxios(err))
      .finally(() => {
        setEditAgent(false)
      })
  }

  if (loading) return <MainLoading />
  if (error) return <Error />

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
        }}
      >
        <BtnAddAgent setAddAgent={setAddAgent} />
        <TableAgent data={data} handleClickEdit={handleClickEdit} />
      </div>

      {addAgent && (
        <AddAgent
          reqAgent={reqAgent}
          setAddAgent={setAddAgent}
          onChangeAgent={onChangeAgent}
          handleSubmitAddAgent={handleSubmitAddAgent}
          error={errorAxios}
        />
      )}
      {editAgent && (
        <EditAgent
          EditAgentBody={EditAgentBody}
          reqEditAgent={reqEditAgent}
          setEdit={setEditAgent}
          onChangeEditAgent={onChangeEditAgent}
          handleSubmitEditAgent={handleSubmitEditAgent}
          error={errorAxios}
        />
      )}
    </>
  )
}

export default Agents

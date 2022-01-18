import { gql } from '@apollo/client'

const GET_ADMIN = gql`
  query Admin {
    admins {
      id
      img
      name
      email
    }
  }
`

const GET_AGENT = gql`
  query Agent {
    agents {
      id
      name
      email
      img
      points
    }
  }
`

const GET_PRODUCT = gql`
  query Products {
    products {
      id
      img
      title
      points
    }
  }
`

const GET_REWARD = gql`
  query Rewards {
    rewards {
      id
      img
      title
      points
      value
    }
  }
`

export { GET_ADMIN, GET_AGENT, GET_PRODUCT, GET_REWARD }

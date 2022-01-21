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
      active
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

const GET_TRANSACTION = gql`
  query Transactions {
    transactions {
      id
      type
      title
      points
      redeem_desc
      nota_img
      redeem_invoice_url
      status
      created_at
    }
  }
`

export { GET_ADMIN, GET_AGENT, GET_PRODUCT, GET_REWARD, GET_TRANSACTION }

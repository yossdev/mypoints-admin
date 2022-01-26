import { gql } from '@apollo/client'

const GET_ADMIN = gql`
  query Admin {
    admins {
      id
      img
      name
      email
      created_at
    }
  }
`

const GET_AGENT = gql`
  query Agent {
    agents(distinct_on: created_at, order_by: { created_at: desc }) {
      id
      name
      email
      img
      points
      active
      created_at
    }
  }
`

const GET_PRODUCT = gql`
  query Products {
    products(distinct_on: created_at, order_by: { created_at: desc }) {
      id
      img
      title
      points
    }
  }
`

const GET_REWARD = gql`
  query Rewards {
    rewards(distinct_on: created_at, order_by: { created_at: desc }) {
      id
      img
      title
      points
      value
      category
    }
  }
`

const GET_SUMMARY = gql`
  query Summary {
    agents_active: agents_aggregate(where: { active: { _eq: true } }) {
      aggregate {
        count
      }
    }
    agents_non_active: agents_aggregate(where: { active: { _eq: false } }) {
      aggregate {
        count
      }
    }
    products_aggregate {
      aggregate {
        count
      }
    }
    rewards_aggregate {
      aggregate {
        count
      }
    }
    transactions_aggregate {
      aggregate {
        count
      }
    }
  }
`

const GET_TRANSACTION = gql`
  query Transactions($limit: Int!) {
    transactions(order_by: { updated_at: desc }, limit: $limit) {
      agent {
        name
      }
      id
      type
      title
      points
      redeem_desc
      nota_img
      redeem_invoice_url
      status
      created_at
      updated_at
    }
  }
`

export {
  GET_ADMIN,
  GET_AGENT,
  GET_PRODUCT,
  GET_REWARD,
  GET_SUMMARY,
  GET_TRANSACTION,
}

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

// TODO: BUAT SUMMARY YANG DI DASHBOARD, AKU AWALNYA PAKE QUERY INI, TAPI MALAH REFETCH TERUS, UDAH MEET SAMA MAS YUSQIE JUGA BELOM WORK TADI
// const GET_SUMMARY = gql`
//   query Summary {
//   admins {
//     agents_aggregate {
//       aggregate {
//         count
//       }
//     }
//     products_aggregate {
//       aggregate {
//         count
//       }
//     }
//     rewards_aggregate {
//       aggregate {
//         count
//       }
//     }
//   }
// }
// `

// TODO: NAH ANEHNYA, KALO PAKE QUERY INI BISA, TAPI MASALAHNYA YA HARUS MANGGIL ADMIN_ID NYA
const GET_SUMMARY = gql`
  query Summary {
    agents_aggregate(
      where: { admin_id: { _eq: "e31192d3-1098-4398-b437-8d58655c865c" } }
    ) {
      aggregate {
        count
      }
    }
    products_aggregate(
      where: { admin_id: { _eq: "e31192d3-1098-4398-b437-8d58655c865c" } }
    ) {
      aggregate {
        count
      }
    }
    rewards_aggregate(
      where: { admin_id: { _eq: "e31192d3-1098-4398-b437-8d58655c865c" } }
    ) {
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

export {
  GET_ADMIN,
  GET_AGENT,
  GET_PRODUCT,
  GET_REWARD,
  GET_SUMMARY,
  GET_TRANSACTION,
}

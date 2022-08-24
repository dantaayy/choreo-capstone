const {gql} = require('apollo-server')

module.exports = gql`
type Query {
    accounts(
        id: ID,
        name: String,
        email: String,
    ): [Account],
    highCreditBalance: [Account!],
    lowCreditBalance: [Account!],
}

type Mutation {
    addAccount(
        name: String!,
        email: String!,
        phone: String!,
        address: String!
    ): Account!,
    updateAccount(
        id: ID!,
        name: String,
        email: String,
        phone: String,
        address: String): Account!,
    deleteAccount(id: ID!): Account,
    addPurchase(id: ID!, purchases: String!): Account!
}

type Account {
    id: ID!,
    name: String!,
    email: String!,
    phone: String!,
    address: String!,
    openDate: String!
}`
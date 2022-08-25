const {ApolloServer, ApolloError} = require('apollo-server')
const colors = require('colors')
const fs = require('fs')
const path = require('path')
const AccountAPI = require('./datasources/accounts')

// SCHEMA
const typeDefs = fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf-8'
)

// const typeDefs = require('./schema')

const dataSources = () => ({
    accountAPI: new AccountAPI()
})

const resolvers = require('./resolvers')

// APOLLO SERVER
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
})

// START UP SERVER
server
    .listen({port: process.env.PORT || 5000})
    .then(({url}) => {
    console.log(colors.blue.inverse(`GraphQL Apollo Server running at ${url}`))
})
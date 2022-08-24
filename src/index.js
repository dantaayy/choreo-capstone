const {ApolloServer, ApolloError} = require('apollo-server')
const colors = require('colors')
const fs = require('fs')
const path = require('path')
const AccountAPI = require('./datasources/accounts')

// const typeDefs = fs.readFileSync(
//     path.join(__dirname, 'schema.graphql'),
//     'utf-8'
// )

const typeDefs = require('./schema')

const dataSources = () => ({
    accountAPI: new AccountAPI()
})

const resolvers = require('./resolvers')

// APOLLO SERVER
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    // HANDLE ANY ERRORS
    debug: false,
    formatError: (error) => {
        if(error.extensions.code === 'INTERNAL_SERVER_ERROR') {
            return new ApolloError('Trouble Connecting...')
        }
    }
})

// START UP SERVER
server
    .listen({port: process.env.PORT || 8000})
    .then(({url}) => {
    console.log(colors.blue.inverse(`GraphQL Apollo Server running at ${url}`))
})
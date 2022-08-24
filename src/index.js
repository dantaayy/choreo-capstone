const {ApolloServer, ApolloError} = require('apollo-server')
const colors = require('colors')
const fs = require('fs')
const path = require('path')
const accounts = require('./accountsSampleData')





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
    console.log(colors.blue.inverse(`GraphQL and Apollo Server running at ${url}`))
})
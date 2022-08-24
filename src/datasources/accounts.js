const accounts = require('../accountsSampleData')
const {DataSource} = require('apollo-datasource')
const _ = require('lodash')

class AccountAPI extends DataSource {
    constructor () {
        super();
    }

    // CACHING PURPOSES
    initialize (config) {

    }

    // METHOD FOR ALL ACCOUNTS
    getAccounts(args) {
        console.log('Function getting hit')
        return _.filter(accounts, args);
    }

    // METHOD TO ADD ACCOUNT
    addAccount(account) {
        accounts.push(account)
        return account
    }
}

module.exports = AccountAPI;
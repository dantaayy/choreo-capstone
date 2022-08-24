const accounts = require('../accountsSampleData')
const {DataSource} = require('apollo-datasource')
const _ = require('lodash')
const colors = require('colors')

class AccountAPI extends DataSource {
    constructor () {
        super();
    }

    // CACHING PURPOSES
    initialize (config) {

    }

    // METHOD FOR ALL ACCOUNTS
    getAccounts(args) {
        return _.filter(accounts, args);
    }

    // METHOD TO ADD ACCOUNT
    addAccount(account) {
        accounts.push(account)
        return account
    }

    // METHOD FOR THOSE W? HIGH BALANCE >2500
    highCreditBalance() {
        const highBalance = accounts.filter((account) => parseInt(account.balance) >= parseInt('2,500'))
        console.log(colors.red.inverse(`Accounts over $2,500 need to pay balance off by the 15th`))
        return highBalance;
    }
}

module.exports = AccountAPI;
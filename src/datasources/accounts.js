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

    // METHOD FOR THOSE W/ HIGH BALANCE >2500
    highCreditBalance() {
        const highBalance = accounts.filter((account) => parseInt(account.balance) >= parseInt('2,500'))
        console.log(colors.red.inverse(`Accounts over $2,500 need to pay balance off by the 15th!`))
        return highBalance;
    }

    // LOW BALANCE ACCOUNT
    lowCreditBalance() {
        const lowBalance = accounts.filter((account) => parseInt(account.balance) <= parseInt('2,500'))
        console.log(colors.green.inverse('Following accounts are under $2500:'))
        return lowBalance
    }

    // METHOD TO ADD ACCOUNT
    addAccount(account) {
        let newID = accounts.length
        newID++
        account.id = newID
        accounts.push(account)
        return account
    }

}

module.exports = AccountAPI;
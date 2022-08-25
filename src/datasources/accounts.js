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
        const highBalance = accounts.filter((account) => account.balance >= 2500)
        console.log(colors.red.inverse(`Accounts over $2,500 need to pay balance off by the 15th!`))
        return highBalance;
    }

    // LOW BALANCE ACCOUNT
    lowCreditBalance() {
        const lowBalance = accounts.filter((account) => account.balance <= 2500)
        console.log(colors.green.inverse('Following accounts are under $2500:'))
        return lowBalance
    }

    // MUTATION TO ADD ACCOUNT
    addAccount(account) {
        let newID = accounts.length
        newID++
        account.id = newID
        account.balance = 0
        account.purchases = []
        accounts.push(account)
        return account
    }

    // MUTATION TO DELETE AN ACCOUNT
    deleteAccount({id}) {
        const index = accounts.findIndex((item) => item.id === id)
        // DELTE ACCOUNT AT ITS INDEX AND ONLY THAT 1 ITEM
        accounts.splice(index, 1)
        
        return accounts;
    }

    // MUTATION TO UPDATE ACCOUNT
    updateAccount({id, name, email, phone, address}) {
        const foundAccount = accounts.find((item) => item.id === id)
        foundAccount.name = name
        foundAccount.email = email
        foundAccount.phone = phone
        foundAccount.address = address

        console.log(foundAccount)
        return foundAccount
    }

    // MUATTION TO ADD A PURCHASE TO A SPECIFIC ACCOUNT
    addPurchase({id, purchase}) {
        const foundAccount = accounts.find((item) => item.id === id)
        // console.log(foundAccount)
        // console.log(foundAccount.balance)
        // console.log(purchase.price)
        foundAccount.balance = foundAccount.balance + purchase.price
        foundAccount.purchases.push(purchase)
        return foundAccount
    }

}

module.exports = AccountAPI;
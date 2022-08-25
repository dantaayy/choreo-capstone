module.exports = {
    addAccount: (parent, {account}, {dataSources}, info) => {
        return dataSources.accountAPI.addAccount(account);
    },
    updateAccount: (parent, {id, name, email, phone, address}, {dataSources}, info) => {
        return dataSources.accountAPI.updateAccount({id, name, email, phone, address});
    },
    addPurchase: (parent, {id, purchase}, {dataSources}, info) => {
        return dataSources.accountAPI.addPurchase({id, purchase});
    }
}
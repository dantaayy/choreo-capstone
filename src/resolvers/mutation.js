module.exports = {
    addAccount: (parent, {account}, {dataSources}, info) => {
        return dataSources.accountAPI.addAccount(account);
    }
}
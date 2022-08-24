module.exports = {
    accounts: (parent, args, {dataSources}, info) => {
        return dataSources.accountAPI.getAccounts(args);
    }



}
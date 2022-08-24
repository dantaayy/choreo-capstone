module.exports = {
    accounts: (parent, args, {dataSources}, info) => {
        return dataSources.accountAPI.getAccounts(args);
    },
    highCreditBalance: (parent, args, {dataSources}, info) => {
        return dataSources.accountAPI.highCreditBalance();
    }



}
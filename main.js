require('dotenv').config()
const ynab = require("ynab")
const token = process.env.access_token;
const ynabAPI = new ynab.API(token);

(async function() {
    //Get budgets
    const budgetsResp = await ynabAPI.budgets.getBudgets();
    const budgets = budgetsResp.data.budgets;
    for(let budget of budgets) {
        console.log(`Budget name: ${budget.name}`)
        const accountsResp = await ynabAPI.accounts.getAccounts(budget.id);
        const accts = accountsResp.data.accounts;
        for (let acct of accts){
            console.log(`Account: ${acct.name} - ${acct.balance}`);
        }
    }
})();

const BudgetStatus = require('./models/BudgetStatus');

async function insertInitialData() {
    // Check if the table is empty
    const count = await BudgetStatus.count();
    if (count === 0) {
        // Insert initial values
        await BudgetStatus.bulkCreate([
            { budgetStatus: 'Pending' },
            { budgetStatus: 'Approved' },
            { budgetStatus: 'Rejected' }
        ]);
        console.log('Initial data inserted into BudgetStatus table.');
    } else {
        console.log('BudgetStatus table already has data.');
    }
}

module.exports = insertInitialData;
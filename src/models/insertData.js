const AccountType = require("./models/accountType");
const AdminDepartment = require("./models/adminDepartment");
const BudgetStatus = require("./models/budgetStatus");
const LicenseStatus = require("./models/licenseStatus");
const ProductCategory = require("./models/productCategory");
const TicketDepartment = require("./models/ticketDepartment");
const TicketPriority = require("./models/ticketPriority");
const TicketStatus = require("./models/ticketStatus");
const { sequelize } = require('./models/database');

async function insertInitialData() {
    const transaction = await sequelize.transaction();

    try {
        const accountTypes = [
            { accountType: 'Admin' },
            { accountType: 'Buyer' },
            { accountType: 'Manager' }
        ];
        const adminDepartments = [
            { department: 'Design' },
            { department: 'Programming' },
            { department: 'Human Resources' },
            { department: 'Finance' }
        ];
        const budgetStatus = [
            { budgetStatus: 'New' },
            { budgetStatus: 'Pending' },
            { budgetStatus: 'Paid' },
            { budgetStatus: 'Rejected' }
        ];
        const licenseStatus = [
            { licenseStatus: 'Active' },
            { licenseStatus: 'Inactive' },
            { licenseStatus: 'Revoked' }
        ];
        const productCategories = [
            { category: 'Programming' },
            { category: 'Design' },
            { category: 'Animation' },
            { category: 'Managing' },
            { category: 'Web' }
        ];
        const ticketDepartments = [
            { ticketDepartment: 'Design' },
            { ticketDepartment: 'Programming' },
            { ticketDepartment: 'Human Resources' },
            { ticketDepartment: 'Finance' }
        ];
        const ticketPriorities = [
            { ticketPriority: 1 },
            { ticketPriority: 2 },
            { ticketPriority: 3 },
            { ticketPriority: 4 },
            { ticketPriority: 0 }
        ];
        const ticketStatus = [
            { ticketStatus: 'New' },
            { ticketStatus: 'Pending' },
            { ticketStatus: 'Solved' },
            { ticketStatus: 'Rejected' }
        ];

        // Check and insert data if the table is empty
        const checkAndInsert = async (model, data) => {
            const count = await model.count();
            if (count === 0) {
                await model.bulkCreate(data, { transaction });
            }
        };

        // Insert data using transactions
        await checkAndInsert(AccountType, accountTypes);
        await checkAndInsert(AdminDepartment, adminDepartments);
        await checkAndInsert(BudgetStatus, budgetStatus);
        await checkAndInsert(LicenseStatus, licenseStatus);
        await checkAndInsert(ProductCategory, productCategories);
        await checkAndInsert(TicketDepartment, ticketDepartments);
        await checkAndInsert(TicketPriority, ticketPriorities);
        await checkAndInsert(TicketStatus, ticketStatus);

        await transaction.commit();
        console.log('Initial data inserted successfully');
    } catch (error) {
        await transaction.rollback();
        console.error('Error inserting initial data:', error);
    }
}

module.exports = insertInitialData;

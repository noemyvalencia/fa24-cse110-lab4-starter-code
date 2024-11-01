"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpenseEndpoints = createExpenseEndpoints;
const expense_utils_1 = require("./expense-utils");
function createExpenseEndpoints(app, expenses) {
    // Create a new expense
    app.post("/expenses", (req, res) => {
        (0, expense_utils_1.createExpenseServer)(req, res, expenses);
    });
    // Delete an expense
    app.delete("/expenses/:id", (req, res) => {
        (0, expense_utils_1.deleteExpense)(req, res, expenses);
    });
    // Get all expenses
    app.get("/expenses", (req, res) => {
        (0, expense_utils_1.getExpenses)(req, res, expenses);
    });
}

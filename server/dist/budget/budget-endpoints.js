"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBudgetEndpoints = createBudgetEndpoints;
const budget_utils_1 = require("./budget-utils");
function createBudgetEndpoints(app, budget) {
    // Get the budget
    app.get("/budget", (req, res) => {
        (0, budget_utils_1.getBudget)(res, budget.amount);
    });
    // Update the budget
    app.put("/budget", (req, res) => {
        (0, budget_utils_1.updateBudget)(res, req.body, budget);
    });
}

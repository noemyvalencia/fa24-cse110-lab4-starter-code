"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBudget = getBudget;
exports.updateBudget = updateBudget;
// Function to get the budget
function getBudget(res, budget) {
    res.status(200).send({ "data": budget });
}
// Function to update the budget
function updateBudget(res, body, budget) {
    // TO DO: Implement updateBudget function
}

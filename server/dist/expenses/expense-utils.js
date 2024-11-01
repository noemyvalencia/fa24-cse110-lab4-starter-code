"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpenseServer = createExpenseServer;
exports.deleteExpense = deleteExpense;
exports.getExpenses = getExpenses;
function createExpenseServer(req, res, expenses) {
    const { id, cost, description } = req.body;
    if (!description || !id || !cost) {
        return res.status(400).send({ error: "Missing required fields" });
    }
    const newExpense = {
        id: id,
        description,
        cost,
    };
    expenses.push(newExpense);
    res.status(201).send(newExpense);
}
function deleteExpense(req, res, expenses) {
    // TO DO: Implement deleteExpense function
}
function getExpenses(req, res, expenses) {
    res.status(200).send({ "data": expenses });
}

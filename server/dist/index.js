"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const expense_endpoints_1 = require("./expenses/expense-endpoints");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// Root endpoint to get test if the server is running
app.get("/", (req, res) => {
    res.send({ "data": "Hello, TypeScript Express!" });
    res.status(200);
});
(0, expense_endpoints_1.createExpenseEndpoints)(app, constants_1.expenses);

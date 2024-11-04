import { Database } from "sqlite";
import { Request, Response } from "express";

export async function createExpenseServer(req: Request, res: Response, db: Database) {
    try {
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };

        if (!description || !id || typeof cost !== 'number') {
            return res.status(400).send({ error: "Missing or invalid fields" });
        }

        await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, description, cost]);
        res.status(201).send({ id, description, cost });

    } catch (error) {
        return res.status(400).send({ error: `Expense could not be created, + ${error}` });
    }
}

export async function deleteExpense(req: Request, res: Response, db: Database) {
    const { id } = req.params;
    try {
        // checks for expense
        const expense = await db.get('SELECT * FROM expenses WHERE id = ?', [id]);

        if (!expense) {
            return res.status(404).send({ error: `Expense with id ${id} not found` });
        }

        // deletes expese
        await db.run('DELETE FROM expenses WHERE id = ?', [id]);
        res.status(200).send({ message: `Expense with id ${id} has been deleted` });
    } catch (error) {
        res.status(500).send({ error: 'Failed to delete expense', details: error });
    }
}

export async function getExpenses(req: Request, res: Response, db: Database) {
    try {
        const expenses = await db.all('SELECT * FROM expenses');
        res.status(200).send(expenses);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve expenses', details: error });
    }
}

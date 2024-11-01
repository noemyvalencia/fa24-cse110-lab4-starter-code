import { Request, Response } from 'express';

let budget = { amount: 2000 };


export function getBudget(req: Request, res: Response) {
    res.status(200).json({ amount: budget.amount });
}


export function updateBudget(req: Request, res: Response) {
    const { amount } = req.body;

  
    console.log("Received amount for update:", amount);

    if (typeof amount === "number" && amount >= 0) {
        budget.amount = amount; 
        console.log("Budget updated to:", budget.amount); 
        res.status(200).json({ message: "Budget updated successfully", amount: budget.amount });
    } else {
        res.status(400).json({ message: "Invalid budget amount" });
    }
}
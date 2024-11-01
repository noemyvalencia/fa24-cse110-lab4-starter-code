import ExpenseItem from "./ExpenseItem";
import { AppContext, AppContextType } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import { Expense } from "../../types/types";
import { fetchExpenses, deleteExpense } from "../../utils/expense-utils";

const ExpenseList = () => {
  const context = useContext(AppContext) as AppContextType;
  const { expenses, setExpenses } = context;
  useEffect(() => {
    loadExpenses();
    }, []);
  
    
    const loadExpenses = async () => {
    try {
      const expenseList = await fetchExpenses();
      setExpenses(expenseList);
    } catch (err: any) {
      console.log(err.message);
    }
    };
    const handleDelete = async (id: string) => {
      try {
        await deleteExpense(id); 
        setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id)); 
      } catch (error) {
        console.error("Failed to delete expense:", error);
      }
    };
  

  return (
    <ul className="list-group">
      {expenses.map((expense: Expense) => (
        <ExpenseItem key={expense.id} id={expense.id} description={expense.description} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
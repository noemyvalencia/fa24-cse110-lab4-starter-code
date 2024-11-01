import { useEffect, useState, useContext } from "react";
import { fetchBudget, updateBudget } from "../../utils/budget-utils";
import { AppContext, AppContextType } from "../../context/AppContext";

const Budget = () => {
  const { expenses, budget, setBudget } = useContext(AppContext) as AppContextType;
  const [editAmount, setEditAmount] = useState<number>(budget);
  const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
  const remainingBudget = budget - totalExpenses; //

  useEffect(() => {
      const loadBudget = async () => {
          try {
              const budgetAmount = await fetchBudget();
              setBudget(budgetAmount);
          } catch (error) {
              console.error("Failed to fetch budget:", error);
          }
      };
      loadBudget();
  }, []);

  const handleUpdateBudget = async () => {
      try {
          const updatedBudget = await updateBudget(editAmount);
          setBudget(updatedBudget);
          setEditAmount(0);
      } catch (error) {
          console.error("Failed to update budget:", error);
      }
  };

  return (
      <div>
        <div>
            <span>Current Budget: ${budget}</span>
        </div>
          <input 
              type="number" 
              value={editAmount} 
              onChange={(e) => setEditAmount(parseFloat(e.target.value))} 
              placeholder="Enter new budget" 
          />
          <button onClick={handleUpdateBudget}>Update Budget</button>
      </div>
  );
};
export default Budget;

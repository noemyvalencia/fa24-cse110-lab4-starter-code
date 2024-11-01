import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  


  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const remaining = budget - totalExpenses;

  const alertType = budget - totalExpenses < 0 ? "alert-danger" : "alert-success"; 
  console.log("Budget:", budget);
  console.log("Total Expenses:", totalExpenses);
  console.log("Remaining:", remaining);
  // Exercise: Create an alert when Remaining is less than 0.

  
  useEffect(() => {
    if (remaining < 0) {
      alert("youve exceeded your budget");
    }
  }, [remaining, budget]); 

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
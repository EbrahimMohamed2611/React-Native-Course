import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenenseContext } from "../store/redux/expenses-context";
import { fetchExpenses } from "../utils/http";

export default function AllExpensess() {
  const expensesCtx = useContext(ExpenenseContext);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const all = await fetchExpenses();
      console.log("All Expenses : ", all);
      setExpenses(all);
    }

    getExpenses();
  }, []);

  return (
    <>
      <ExpensesOutput expenses={expenses} expensesPeriod="Total" />
    </>
  );
}

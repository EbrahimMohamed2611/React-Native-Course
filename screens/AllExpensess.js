import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenenseContext } from "../store/redux/expenses-context";

export default function AllExpensess() {
  const expensesCtx = useContext(ExpenenseContext);
  return (
    <>
      <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />
    </>
  );
}

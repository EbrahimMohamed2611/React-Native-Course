import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpenenseContext } from "../store/redux/expenses-context";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpensess() {
  const expensesCtx = useContext(ExpenenseContext);
  //We need to show the expenses in the last 7 days "u need to change the data if this list not in the screen"
  const lastExpensesIn7Days = expensesCtx.expenses.filter(
    (expense) => expense.date > getDateMinusDays(new Date(), 7)
  );

  return (
    <ExpensesOutput
      expenses={lastExpensesIn7Days}
      expensesPeriod="Last 7 days"
    />
  );
}

const styles = StyleSheet.create({});

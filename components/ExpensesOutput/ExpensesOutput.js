import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

import { GlobalStyles } from "../../constants/Styles";

const EXPENSESS_DATA = [
  {
    id: 1,
    description: "A book",
    amount: 22.23,
    date: new Date("2025-02-13"),
  },
  {
    id: 2,
    description: "Grocery shopping",
    amount: 85.47,
    date: new Date("2025-03-05"),
  },
  {
    id: 3,
    description: "Movie tickets",
    amount: 32.5,
    date: new Date("2025-01-21"),
  },
  {
    id: 4,
    description: "Restaurant dinner",
    amount: 64.8,
    date: new Date("2025-02-28"),
  },
  {
    id: 5,
    description: "Electric bill",
    amount: 120.0,
    date: new Date("2025-03-15"),
  },
  {
    id: 6,
    description: "New headphones",
    amount: 199.99,
    date: new Date("2025-01-10"),
  },
  {
    id: 7,
    description: "A book",
    amount: 22.23,
    date: new Date("2025-02-13"),
  },
  {
    id: 8,
    description: "Grocery shopping",
    amount: 85.47,
    date: new Date("2025-03-05"),
  },
  {
    id: 9,
    description: "Movie tickets",
    amount: 32.5,
    date: new Date("2025-01-21"),
  },
  {
    id: 10,
    description: "Restaurant dinner",
    amount: 64.8,
    date: new Date("2025-02-28"),
  },
  {
    id: 11,
    description: "Electric bill",
    amount: 120.0,
    date: new Date("2025-03-15"),
  },
  {
    id: 12,
    description: "New headphones",
    amount: 199.99,
    date: new Date("2025-01-10"),
  },
];

export default function ExpensesOutput({ expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={EXPENSESS_DATA} periodName={expensesPeriod} />
      <ExpenseList expenses={EXPENSESS_DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
    paddingHorizontal: 10,
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/Styles";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function AllExpensess() {
  return (
    <>
      <ExpensesOutput expensesPeriod="Total" />;
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});

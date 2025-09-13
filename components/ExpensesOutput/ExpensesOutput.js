import { StyleSheet, Image, View } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

import { GlobalStyles } from "../../constants/Styles";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  let content = (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/empty-box.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </>
  );

  if (expenses.length > 0) content = <ExpenseList expenses={expenses} />;

  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 80,
  },
});

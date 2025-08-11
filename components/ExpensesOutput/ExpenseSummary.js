import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

export default function ExpenseSummary({ expenses, periodName }) {
  const expensesSum = expenses
    .reduce((sum, expense) => sum + expense.amount, 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <View style={styles.sumContainer}>
        <Text style={styles.sum}>${expensesSum}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.itemBackground,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  period: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.background,
    fontWeight: "bold",
  },
  sumContainer: {
    backgroundColor: GlobalStyles.colors.yellowBackgrund,
    borderRadius: 8,
    padding: 5,
  },
});

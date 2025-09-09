import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/Styles";
import { useNavigation } from "@react-navigation/native";

export default function ExpneseItem({ description, date, amount, id }) {
  const formattedDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("ManageExpenses", { expenseId: id })}
    >
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBade, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBade}>{formattedDate}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.textBade, styles.amount]}>
            {amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.itemBackground,
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  amountContainer: {
    backgroundColor: GlobalStyles.colors.greenText,
    paddingHorizontal: 8,
    borderRadius: 5,
    minWidth: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    fontWeight: "bold",
  },
  textBade: {
    color: "white",
  },
});

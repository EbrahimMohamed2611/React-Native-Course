import { StyleSheet, View } from "react-native";
import { useContext, useLayoutEffect } from "react";

import ButtonIcon from "../components/UI/ButtonIcon";
import { GlobalStyles } from "../constants/Styles";

import { ExpenenseContext } from "../store/redux/expenses-context";
import Form from "../components/ManageExpenses/Form";

export default function ManageExpensess({ route, navigation }) {
  const expenseCtx = useContext(ExpenenseContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const currentExpenseSelected = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  function onDeleteHandeler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function onCancelHandeler() {
    navigation.goBack();
  }
  function onConfirmHandeler(expenseDate) {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseDate);
    } else {
      expenseCtx.addExpense(expenseDate);
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
    });
  }, [isEditing]);
  return (
    <View style={styles.container}>
      <Form
        onCancel={onCancelHandeler}
        buttonLabel={isEditing ? "Edit" : "Add"}
        onSubmit={onConfirmHandeler}
        defaultValues={currentExpenseSelected}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <ButtonIcon
            icon="trash"
            size={25}
            color="white"
            onPress={onDeleteHandeler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background,
    flex: 1,
    padding: 24,
    // alignItems: "center",
  },
  deleteContainer: {
    backgroundColor: GlobalStyles.colors.danger,
    width: "100%",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
});

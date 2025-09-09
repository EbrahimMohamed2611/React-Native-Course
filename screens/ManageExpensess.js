import { StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";

import ButtonIcon from "../components/UI/ButtonIcon";
import { GlobalStyles } from "../constants/Styles";
import AppButton from "../components/UI/AppButton";

export default function ManageExpensess({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  function onDeleteHandeler() {
    navigation.goBack();
  }
  function onCancelHandeler() {
    navigation.goBack();
  }
  function onConfirmHandeler() {
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
    });
  }, [isEditing]);
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <AppButton onPress={onCancelHandeler} style={styles.button} mode="flat">
          Cancel
        </AppButton>
        <AppButton onPress={onConfirmHandeler} style={styles.button}>
          {isEditing ? "Edit" : "Add"}
        </AppButton>
      </View>
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
    alignItems: "center",
  },
  deleteContainer: {
    backgroundColor: GlobalStyles.colors.danger,
    width: 200,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
    marginVertical: 15,
  },
});

import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import AppButton from "../UI/AppButton";

export default function Form({
  buttonLabel,
  onSubmit,
  onCancel,
  defaultValues,
}) {
  //instead fo create useState for every input we can use this approach
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString() : "",
    description: defaultValues ? defaultValues.description : "",
  });

  function inputChangeHandler(inputIdentifier, value) {
    setInputValues((currentValues) => {
      return { ...currentValues, [inputIdentifier]: value }; // Dynamic property binding
    });
    console.log("##### " + inputIdentifier + " : " + value + " #####");
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
  }
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Expense Title</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfigurations={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfigurations={{
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: "#8d8d8d",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfigurations={{
          multiline: true,
          autoCapitalize: "words",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <AppButton onPress={onCancel} style={styles.button} mode="flat">
          Cancel
        </AppButton>
        <AppButton onPress={submitHandler} style={styles.button}>
          {buttonLabel}
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 20,
  },
  inputsRow: {
    flexDirection: "row",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    marginBottom: 30,
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

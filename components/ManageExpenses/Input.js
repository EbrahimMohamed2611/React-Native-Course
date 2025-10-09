import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({ label, style, textInputConfigurations }) {
  const inputStyles = [styles.input];
  if (textInputConfigurations && textInputConfigurations.multiline)
    inputStyles.push(styles.inputLine);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfigurations} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 8,
  },
  label: {
    marginBottom: 6,
    color: "white",
  },
  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#fff5f5",
    padding: 5,
    fontSize: 12,
    color: "white",
  },
  inputLine: {
    minHeight: 100,
    textAlignVertical: "top", // this for unified the look on all platforms
  },
});

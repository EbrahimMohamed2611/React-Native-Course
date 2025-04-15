import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";

function TitleApp({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: colors.font,
    padding: 20,
    fontFamily: "Gilroy-Bold",
  },
});

export default TitleApp;

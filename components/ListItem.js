import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../utils/colors";

function ListItem({ roundNumber, guessedNumber }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess {guessedNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.accentBackground,
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.accent,
    fontFamily: "Gilroy-Medium",
  },
});

export default ListItem;

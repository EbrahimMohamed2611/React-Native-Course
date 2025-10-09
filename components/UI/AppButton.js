import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/Styles";

export default function AppButton({ children, onPress, style, mode }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.prseed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flat: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ffdb67",
  },
  flatText: {
    color: "#ffdb67",
  },
  prseed: {
    opacity: 0.75,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary,
  },
});

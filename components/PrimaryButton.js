import React from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../utils/colors";

function PrimaryButton({
  children,
  onPress = () => {
    console.log("pressed");
  },
  backgroundColor = colors.primary,
  color = colors.font,
  width = "100%",
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        if (pressed)
          return {
            opacity: 0.5,
          };
      }}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: backgroundColor, width: width },
        ]}
      >
        <Text style={[styles.text, { color: color }]}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    borderRadius: "25",
    // paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default PrimaryButton;

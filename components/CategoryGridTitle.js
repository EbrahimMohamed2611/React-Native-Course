import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const darkenColor = (hex, percent) => {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");
  // Parse r, g, b
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Darken by reducing each channel
  const darkenedR = Math.max(0, r - (r * percent) / 100)
    .toString(16)
    .padStart(2, "0");
  const darkenedG = Math.max(0, g - (g * percent) / 100)
    .toString(16)
    .padStart(2, "0");
  const darkenedB = Math.max(0, b - (b * percent) / 100)
    .toString(16)
    .padStart(2, "0");
  return `#${darkenedR}${darkenedG}${darkenedB}`;
};

export default function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View style={styles.gridTitle}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          //   pressed && { backgroundColor: darkenColor(color, 20) }, // Darken by 20%
          pressed ? styles.pressedEffect : null,
        ]}
      >
        <View style={[styles.titleContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridTitle: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 7,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
  },
  pressedEffect: {
    opacity: 0.2,
  },
});

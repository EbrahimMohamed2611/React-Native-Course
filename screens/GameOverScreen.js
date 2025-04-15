import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import colors from "../utils/colors";
import TitleApp from "../components/TitleApp";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewScreen }) {
  return (
    <View style={styles.container}>
      <TitleApp>Game Over</TitleApp>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/game-over.png")}
        />
      </View>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Your Phone Needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          Rounded To Guess Number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          backgroundColor={colors.accent}
          color={colors.white}
          onPress={() => onStartNewScreen()}
        >
          Start New Game
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: 400,
    height: 400,
  },
  imageContainer: {
    backgroundColor: colors.accent,
    borderRadius: 200,
  },
  summary: {
    marginVertical: 30,
  },
  summaryText: {
    fontFamily: "Gilroy-Medium",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 40,
  },
  highlight: {
    fontFamily: "Gilroy-Bold",
    color: colors.accent,
    fontSize: 25,
  },
  buttonContainer: {
    width: "100%",
  },
});

export default GameOverScreen;

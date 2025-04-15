import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../utils/colors";
import TitleApp from "../components/TitleApp";
import PrimaryButton from "../components/PrimaryButton";
import ListItem from "../components/ListItem";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) return generateRandomBetween(min, max, exclude);
  else return randomNumber;
}

let minBoundary = 1;
let maxBoundary = 100;
const LOWER = "lower";
const GREATER = "greater";

function GameScreen({ userNumber, onGameOver }) {
  const intialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  // will add the initialGuess to the rounds becouse this is the first guess number happened
  const [guessRounds, setGuessRounds] = useState([intialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guessRounds.length);
  }, [currentGuess]);

  useEffect(() => {
    minBoundary = 0;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    //Make this code safe
    if (
      (direction === LOWER && currentGuess < userNumber) ||
      (direction === GREATER && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie !", "You know that this is wrong :(", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === LOWER) {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newNumber);
    setGuessRounds([newNumber, ...guessRounds]);
    // if (newNumber === userNumber) {
    //   Alert.alert("Game Over", "Yes you are right .", [
    //     { text: "Okay", style: "default" },
    //   ]);
    //   return;
    // }
  }

  const roundsLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <TitleApp>Opponent's Guess</TitleApp>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{currentGuess}</Text>
      </View>
      <View>
        <Text style={styles.instructions}>Higher or Lower ?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          backgroundColor={colors.accent}
          color={colors.white}
          onPress={() => nextGuessHandler(GREATER)}
        >
          <Ionicons name="add-sharp" size={30} color={colors.white} />
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler(LOWER)}>
          <Ionicons name="remove-sharp" size={30} color={colors.white} />
        </PrimaryButton>
      </View>
      <View style={styles.roundsContainer}>
        {/* {guessRounds.map((gussedRound) => (
          <Text key={gussedRound}>{gussedRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <ListItem
              guessedNumber={itemData.item}
              roundNumber={roundsLength - itemData.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: colors.white,
    // justifyContent: "center",
  },
  number: {
    fontSize: 50,
    color: colors.accent,
    textAlign: "center",
    fontFamily: "Gilroy-Medium",
  },
  numberContainer: {
    backgroundColor: colors.accentBackground,
    padding: 20,
    width: 100,
    height: 100,
    borderRadius: 60,
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
  },
  instructions: {
    fontFamily: "Gilroy-Medium",
    fontSize: 20,
    marginVertical: 10,
  },
  roundsContainer: {
    flex: 1,
  },
});

export default GameScreen;

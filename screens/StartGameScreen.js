import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/colors";
import TitleApp from "../components/TitleApp";

function StartGameScreen({ onPickNumber }) {
  const [enteredText, setEnteredText] = useState("");
  const { width, height } = useWindowDimensions();
  console.log("Landscape With " + width + " and Hieght " + height);
  // Landscape With 869.3333333333334 and Hieght 387.42857142857144
  const topDistance = height < 500 ? 30 : 100;

  function handleChangeInput(enteredValue) {
    setEnteredText(enteredValue);
  }

  function reset() {
    setEnteredText("");
  }

  const handleConfirmNumber = () => {
    const enteredNumber = parseInt(enteredText);
    if (isNaN(enteredNumber) || enteredNumber <= 0 || enteredNumber > 99) {
      Alert.alert(
        "Inavlid Number!",
        "The entered number should be valid and has to be a number between 0 and 99.",
        [{ text: "Okay", style: "destructive", onPress: reset }]
      );
      return;
    }
    // console.log("Valid number: ", enteredNumber);
    onPickNumber(enteredNumber);
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior="padding"
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 0 })}
    >
      <ScrollView style={styles.screen}>
        <View style={[styles.container, { marginTop: topDistance }]}>
          <TitleApp>Start The Game</TitleApp>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/start-game-1.png")}
            />
          </View>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={enteredText}
            onChangeText={handleChangeInput}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={handleConfirmNumber}
              backgroundColor={Colors.accent}
              color={Colors.white}
            >
              Add
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={reset}>Reset</PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    // marginTop: 100,
  },
  input: {
    backgroundColor: Colors.white,
    width: "100%",
    height: 60,
    borderRadius: 10,
    color: Colors.font,
    fontSize: 20,
    fontFamily: "Roboto",
    textAlign: "center",
    borderColor: Colors.dammed,
    borderWidth: 2,
    fontFamily: "Gilroy-Medium",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: Colors.accentBackground,
    borderRadius: 200,
    overflow: "hidden",
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});

export default StartGameScreen;

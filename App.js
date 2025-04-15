import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import colors from "./utils/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessNumber, setGuessNumber] = useState(0);

  function pickedNumberHandler(number) {
    setUserNumber(number);
  }

  const [fontsLoaded, fontError] = useFonts({
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
  });

  function gameOverHandler(numberOfGuess) {
    setGameIsOver(true);
    setGuessNumber(numberOfGuess);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessNumber(0);
    setGameIsOver(false);
  }

  // if (!fontsLoaded) return <AppLoading />;
  // Wait for fonts to load
  if (!fontsLoaded) {
    return null; // Return a blank screen or a custom loading component
  }

  // Hide the splash screen once fonts are loaded
  SplashScreen.hideAsync();

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber)
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );

  if (gameIsOver)
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessNumber}
        onStartNewScreen={startNewGameHandler}
      />
    );

  return (
    // <SafeAreaView style={styles.screen}>
    // <ScrollView style={styles.screen}>
    <View style={styles.screen}>
      {/* <LinearGradient */}

      {/* colors={[colors.backgroundColor, colors.backgroundColor]} */}
      {/* style={styles.screen} */}
      {/* > */}
      {/* <StartGameScreen /> */}
      {screen}
      {/* <GameOverScreen
        roundsNumber={4}
        userNumber={20}
        onStartNewScreen={() => console.log("pressed")}
        /> */}
      {/* </LinearGradient> */}
    </View>
    // </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

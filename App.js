import { Dimensions, View, StyleSheet, Text, ScrollView } from "react-native";
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
  const { width, height, scale, fontScale } = Dimensions.get("window");

  return <View style={styles.screen}>{screen}</View>;
  // return (
  //   // <View style={{ maxWidth: 200, backgroundColor: "tomato", marginTop: 100 }}>
  //   //   <Text numberOfLines={1}>
  //   //     This is a really long sentence that would normally overflow.
  //   //   </Text>
  //   // </View>
  //   <ScrollView contentContainerStyle={styles.container}>
  //     <Text style={styles.title}>Fixed Width</Text>
  //     <View style={[styles.box, { width: 100, backgroundColor: "skyblue" }]}>
  //       <Text>Width: 100</Text>
  //     </View>

  //     <Text style={styles.title}>minWidth (100)</Text>
  //     <View
  //       style={[styles.box, { minWidth: 150, backgroundColor: "lightgreen" }]}
  //     >
  //       <Text>Min Width: 100</Text>
  //     </View>

  //     <Text style={styles.title}>maxWidth (200)</Text>
  //     <View
  //       style={[styles.box, { maxWidth: 200, backgroundColor: "lightpink" }]}
  //     >
  //       <Text numberOfLines={1}>
  //         This text is really long and the box stops growing at 200 width
  //       </Text>
  //     </View>

  //     <Text style={styles.title}>Responsive Width: 80% with min/max</Text>
  //     <View
  //       style={[
  //         styles.box,
  //         {
  //           width: screenWidth * 0.8,
  //           minWidth: 100,
  //           maxWidth: 300,
  //           backgroundColor: "#ffa07a",
  //         },
  //       ]}
  //     >
  //       <Text>Width: 80% of screen (min 100, max 300)</Text>
  //     </View>
  //   </ScrollView>
  // );
}

// const styles = StyleSheet.create({
// container: {
//   padding: 40,
//   alignItems: "center",
// },
// title: {
//   marginTop: 20,
//   fontWeight: "bold",
// },
// box: {
//   padding: 10,
//   marginTop: 10,
//   borderWidth: 1,
// },
// });

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

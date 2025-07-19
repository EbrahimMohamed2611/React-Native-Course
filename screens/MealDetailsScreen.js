import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ImageBackground,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/meals-data";
import ButtonIcon from "../components/ButtonIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FavoritesContext } from "../store/context/favorites-context";

export default function MealDetailsScreen({ navigation, route }) {
  const favoriteContext = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const favoriteMealExist = favoriteContext.ids.includes(mealId);
  const currentMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHeader() {
    if (favoriteMealExist) {
      favoriteContext.removeFavorite(mealId);
    } else {
      favoriteContext.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: currentMeal.title + " etails",
      headerRight: () => {
        return (
          <ButtonIcon
            icon={favoriteMealExist ? "star" : "star-outline"}
            color="white"
            size={24}
            onPress={headerButtonPressHeader}
          />
        );
      },
    });
  }, [currentMeal, headerButtonPressHeader, navigation]);
  return (
    <>
      <ImageBackground
        source={{ uri: currentMeal.imageUrl }}
        style={styles.image}
      ></ImageBackground>

      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{currentMeal.title}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.durationContainer}>
            <Ionicons name="time-outline" size={15} color="black" />
            <Text style={styles.durationTitle}>{currentMeal.duration}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>
              {currentMeal.complexity.toUpperCase()}
            </Text>
          </View>
          <View>
            <Text style={styles.subTitle}>
              {currentMeal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.titleContainer}>
            <View style={styles.subTitleContainer}>
              <Text style={styles.h2}>Ingredients</Text>
              {currentMeal.ingredients.map((ingredient) => (
                <View key={ingredient}>
                  <Text>{ingredient}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View>
          <View style={styles.titleContainer}>
            <View style={styles.subTitleContainer}>
              <Text style={styles.h2}>Steps</Text>
              {currentMeal.steps.map((step) => (
                <View key={step}>
                  <Text>{step}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    height: 350,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  detailsContainer: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginTop: -40, // This is the key to the overlapping effect
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    margin: 5,
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: 18,
  },
  h2: {
    fontFamily: "Gilroy-Bold",
    fontSize: 15,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  subTitle: {
    fontFamily: "Gilroy-Medium",
    fontSize: 17,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  durationTitle: {
    paddingHorizontal: 8,
  },
  durationContainer: {
    flexDirection: "row",
    backgroundColor: "#fac85c",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  subTitleContainer: {
    alignContent: "center",
  },
});

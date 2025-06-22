import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/meals-data";
import ButtonIcon from "../components/ButtonIcon";

export default function MealDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const currentMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHeader() {
    console.log("Meal " + currentMeal.title + " Added To the Favourit Meals");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: currentMeal.title + " etails",
      headerRight: () => {
        return (
          <ButtonIcon
            icon="star"
            color="white"
            size={24}
            onPress={headerButtonPressHeader}
          />
        );
      },
    });
  }, [currentMeal, headerButtonPressHeader, navigation]);
  return (
    <View>
      <Text>Meal Details for Meal{JSON.stringify(currentMeal)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

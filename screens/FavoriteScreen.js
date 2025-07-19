import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/meals-data";
import MealsList from "../components/MealsList";

export default function FavoriteScreen() {
  const context = useContext(FavoritesContext);
  const mealsId = context.ids;
  const favoriteMeals = MEALS.filter((meal) => mealsId.includes(meal.id));
  console.log(favoriteMeals);
  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({});

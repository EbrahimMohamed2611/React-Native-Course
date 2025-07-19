import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/meals-data";

import MealsList from "../components/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const categoryMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(route.params.categoryId) >= 0
  );

  // use this hook instead of useEffect
  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId).title,
    });
  }, [categoryId]);

  const routeHook = useRoute();
  return <MealsList items={categoryMeals} />;
}

const styles = StyleSheet.create({});

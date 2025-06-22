import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/meals-data";
import MealItem from "../components/MealItem";

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

  function renderItem(dataItem) {
    const item = dataItem.item;
    const itemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...itemProps} />;
  }

  const routeHook = useRoute();
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryMeals}
        keyExtractor={(dataItem) => dataItem.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

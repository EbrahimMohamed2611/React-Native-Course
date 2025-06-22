import { FlatList, StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/meals-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderItem(itemData, navigation) {
  return (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={() =>
        navigation.navigate("MealsOverviewScreen", {
          categoryId: itemData.item.id,
        })
      }
    />
  );
}

export default function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderItem(itemData, navigation)}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});

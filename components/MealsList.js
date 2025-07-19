import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";

export default function MealsList({ items }) {
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
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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

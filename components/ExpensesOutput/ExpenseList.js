import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpneseItem from "./ExpneseItem";

export default function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={(itemData) => <ExpneseItem {...itemData.item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});

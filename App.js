import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/meals-data";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
  });

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#f6c12f" },
            headerTintColor: "#000000",
            contentStyle: { backgroundColor: "#ffffff" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "Meals Categories" }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   return { title: route.params.categoryId };
            // }}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/meals-data";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "Gilroy-Regular": require("./assets/fonts/Gilroy-Regular.ttf"),
  });

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f6c12f" },
          headerTintColor: "#000000",
          contentStyle: { backgroundColor: "#ffffff" },
        }}
      >
        <Drawer.Screen name="MealsCategories" component={CategoriesScreen} />
        <Drawer.Screen name="Favorite" component={FavoriteScreen} />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#f6c12f" },
              headerTintColor: "#000000",
              contentStyle: { backgroundColor: "#ffffff" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: "Categories",
                headerShown: false,
              }}
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
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

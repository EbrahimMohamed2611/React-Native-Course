import { View, StyleSheet, Text } from "react-native";
import colors from "./utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpensess from "./screens/RecentExpensess";
import AllExpensess from "./screens/AllExpensess";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ManageExpensess from "./screens/ManageExpensess";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpensess} />
      <BottomTabs.Screen name="AllExpensess" component={AllExpensess} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpnesesOverview">
          <Stack.Screen name="ManageExpenses" component={ManageExpensess} />
          <Stack.Screen name="ExpnesesOverview" component={ExpensesOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ff6161",
    flex: 1,
  },
});

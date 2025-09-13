import { View, StyleSheet, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpensess from "./screens/RecentExpensess";
import AllExpensess from "./screens/AllExpensess";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ManageExpensess from "./screens/ManageExpensess";
import { GlobalStyles } from "./constants/Styles";

import { Ionicons } from "@expo/vector-icons";
import ButtonIcon from "./components/UI/ButtonIcon";
import ExpensesContextProvider from "./store/redux/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.background },
        headerTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.background },
        tabBarActiveTintColor: GlobalStyles.colors.primary,
        headerRight: ({ tintColor }) => (
          <ButtonIcon
            color={tintColor}
            size={24}
            icon="add"
            onPress={() => navigation.navigate("ManageExpenses")}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensess}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpensess"
        component={AllExpensess}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ExpnesesOverview"
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.background,
              },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpensess}
              options={{ presentation: "modal" }}
            />
            <Stack.Screen
              name="ExpnesesOverview"
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ff6161",
    flex: 1,
  },
});

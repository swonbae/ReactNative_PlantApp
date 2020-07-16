import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
// import Login from "../screens/Login";
// import Explore from "../screens/Explore";
// import Browse from "../screens/Browse";
// import Product from "../screens/Product";
// import Settings from "../screens/Settings";

import { theme } from "../constants";

const Stack = createStackNavigator();
// {
//   Welcome,
//   // Login,
//   // Explore,
//   // Browse,
//   // Product,
//   // Settings,
// },
// {
//   defaultNavigationOptions: {
//     headerStyle: {},
//     headerBackImage: <Image />,
//     headerBackTitle: null,
//     headerLeftContainerStyle: {},
//     headerRightContainerStyle: {},
//   },
// }

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

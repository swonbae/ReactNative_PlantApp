import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
// import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
// import Product from "../screens/Product";
import Settings from "../screens/Settings";

import { theme } from "../constants";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          //   headerShown: false,
          cardStyle: { backgroundColor: "white" }, // body color

          headerTitle: null,
          headerStyle: {
            height: theme.sizes.base * 4,
            backgroundColor: theme.colors.white,
            // borderBottomColor: "transparent",
            shadowColor: "transparent",
            elevation: 0, // for android
          },
          headerBackImage: () => (
            <Image source={require("../assets/icons/back.png")} />
          ),
          headerLeftContainerStyle: {
            alignItems: "center",
            // marginLeft: theme.sizes.base * 2,
            marginLeft: theme.sizes.base * 1.2,
            // paddingRight: theme.sizes.base,
          },
          headerRightContainerStyle: {
            alignItems: "center",
            paddingRight: theme.sizes.base,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{
          //   headerTitle: null,
          //   headerStyle: {
          //     height: theme.sizes.base * 4,
          //     backgroundColor: theme.colors.white,
          //     // borderBottomColor: "transparent",
          //     shadowColor: "transparent",
          //     elevation: 0, // for android
          //   },
          //   headerBackImage: () => (
          //     <Image source={require("../assets/icons/back.png")} />
          //   ),
          //   headerLeftContainerStyle: {
          //     alignItems: "center",
          //     // marginLeft: theme.sizes.base * 2,
          //     marginLeft: theme.sizes.base * 1.2,
          //     // paddingRight: theme.sizes.base,
          //   },
          //   headerRightContainerStyle: {
          //     alignItems: "center",
          //     paddingRight: theme.sizes.base,
          //   },
          // }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

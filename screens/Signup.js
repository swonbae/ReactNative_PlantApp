import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
// import { Header } from "@react-navigation/stack";
import { Button, Block, Text, Input } from "../components";
import { theme } from "../constants";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const { navigation } = props;

  const handleSignUp = () => {
    const newErrors = [];

    Keyboard.dismiss();
    setLoading(true);

    // for demonstration
    setTimeout(() => {
      // check with backend API or with some static data
      if (!email || email === "") {
        newErrors.push("email");
      }
      if (!username || username === "") {
        newErrors.push("username");
      }
      if (!password || password === "") {
        newErrors.push("password");
      }

      setLoading(false);
      setErrors(newErrors);

      if (!newErrors.length) {
        //   navigation.navigate("Browse");
        Alert.alert(
          "Success!",
          "Your account has been created.",
          [
            {
              text: "Continue",
              onPress: () => {
                navigation.navigate("Browse");
              },
            },
          ]
          // { cancelable: false }
        );
      }
    }, 1500);
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView
      style={styles.signup}
      // behavior="padding"
      behavior={Platform.OS === "ios" ? "padding" : null}
      // keyboardVerticalOffset={Header.HEIGHT + 20}
    >
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Sign Up
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              label="Username"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={username}
              onChangeText={(text) => setUsername(text)}
            />
            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Button gradient onPress={() => handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Sign up
                </Text>
              )}
            </Button>
            <Button
              onPress={() => {
                //   navigation.goBack();
                navigation.navigate("Login");
              }}
            >
              <Text gray caption center style={styles.loginText}>
                Back to Login
              </Text>
            </Button>
          </Block>
        </ScrollView>
      </Block>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    // borderColor: "transparent",
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  loginText: {
    textDecorationLine: "underline",
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

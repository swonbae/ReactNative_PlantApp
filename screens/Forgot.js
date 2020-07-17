import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Button, Block, Text, Input } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "contact@react-ui-kit.com";

export default function Forgot(props) {
  const [email, setEmail] = useState(VALID_EMAIL);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const { navigation } = props;

  const handleForgot = () => {
    const newErrors = [];

    Keyboard.dismiss();
    setLoading(true);

    // for demonstration
    setTimeout(() => {
      // check with backend API or with some static data
      if (email !== VALID_EMAIL) {
        newErrors.push("email");
      }

      setLoading(false);
      setErrors(newErrors);

      if (!newErrors.length) {
        //   navigation.navigate("Browse");
        Alert.alert(
          "Password sent!",
          "Please check your email.",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("Login");
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Error",
          "Please check your email address.",
          [
            {
              text: "Try again",
            },
          ],
          { cancelable: false }
        );
      }
    }, 2000);
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView
      style={styles.forgot}
      //   behavior="height"
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Forgot
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Button gradient onPress={() => handleForgot()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Forgot
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
      </Block>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  forgot: {
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

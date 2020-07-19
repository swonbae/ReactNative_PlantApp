import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Button, Block, Text, Input } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "contact@swonb.tk";
const VALID_PASSWORD = "password";

export default function Login(props) {
  const [email, setEmail] = useState(VALID_EMAIL);
  const [password, setPassword] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const { navigation } = props;

  const handleLogin = () => {
    const newErrors = [];

    Keyboard.dismiss();
    setLoading(true);

    // for demonstration
    setTimeout(() => {
      // check with backend API or with some static data
      if (email !== VALID_EMAIL) {
        newErrors.push("email");
      }
      if (password !== VALID_PASSWORD) {
        newErrors.push("password");
      }

      setLoading(false);
      setErrors(newErrors);

      if (!newErrors.length) {
        navigation.navigate("Browse");
      }
    }, 1000);
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView
      style={styles.login}
      //   behavior="height"
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            secure
            label="Password"
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button gradient onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Login
              </Text>
            )}
          </Button>
          <Button
            onPress={() => {
              navigation.navigate("Forgot");
            }}
          >
            <Text gray caption center style={styles.forgotText}>
              Forgot your password?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  login: {
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
  forgotText: {
    textDecorationLine: "underline",
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

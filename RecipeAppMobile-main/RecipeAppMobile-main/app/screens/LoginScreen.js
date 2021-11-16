import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result.data);
  };

  return (
    <ImageBackground 
        style={styles.background} 
        source={require("../assets/loginBackground.jpg")}
      > 
      <Screen style={styles.container}>
        

        <Image resizeMode="contain" style={styles.logo} source={require("../assets/logo.png")} />

        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </Form>
        
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    height: "100%",
    width:"100%",
    flex: 1,
  },
  container: {
    padding: 10,
  },
  logo: {
    width: "100%",
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;

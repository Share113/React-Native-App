import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image resizeMode="contain" style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Where No Recipe Is Secret</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: "150%",
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 200,
    alignItems: "center",
  },
  tagline: {
    fontStyle: 'italic',
    fontFamily: 'Cochin',
    fontSize: 23,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

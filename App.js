import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "./App/constants";
import Navigation from "./App/screens/Navigation";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [load, setLoad] = useState(false);

  const fetchFonts = Fonts.loadAsync({
    robotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    robotoLight: require("./assets/fonts/Roboto-Light.ttf"),
  });

  if (!load) {
    return (
      <AppLoading
        startAsync={() => fetchFonts}
        onFinish={() => setLoad(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

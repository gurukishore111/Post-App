import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStackTab from "./navigation/Mytab";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <NavigationContainer>
      <MyStackTab />
    </NavigationContainer>
  );
}
registerRootComponent(App);

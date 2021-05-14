import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export const CreatePost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("imagePicker")}>
        <View style={styles.bgContainer}>
          <Text style={styles.textStyle}>Image</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("textpost")}>
        <View style={styles.bgContainer}>
          <Text style={styles.textStyle}>Text</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bgContainer: {
    backgroundColor: "#f2eeed",
    margin: 10,
    padding: 10,
    width: 120,
  },
  textStyle: {
    textAlign: "center",
  },
});

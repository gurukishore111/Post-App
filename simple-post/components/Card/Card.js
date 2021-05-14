/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from "react-native";

const Card = ({ image, title, date }) => {
  const trim = (words, length) => {
    if (words.length > length) return words.substring(0, length) + "......";
    return words;
  };
  const imageUrl = image.replace("localhost", "192.168.43.104");
  return (
    <View style={styles.container}>
      {image !== "" && (
        <Image
          source={{ uri: imageUrl }}
          style={{ width: "100%", height: 200 }}
          resizeMode="cover"
        />
      )}
      <Text style={styles.textStyle}>{trim(title, 200)}</Text>
      <Text style={styles.timeStyle}>{moment(date).fromNow()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 10,
  },
  textStyle: {
    marginTop: 7,
    color: "#5c5d5e",
  },
  timeStyle: {
    marginTop: 7,
    color: "#8d8f91",
  },
});

export default Card;

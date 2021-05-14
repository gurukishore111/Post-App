/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import "react-native-gesture-handler";
import Card from "../components/Card/Card";
import { getPost } from "../apicalls/service";

const HomeScreen = ({ navigation }) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost().then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.AppContainer}>
      {loading && (
        <View style={styles.container}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      )}
      {!loading && post && post.length === 0 ? (
        <View style={styles.container}>
          <Text>No Post 🏞</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.PostContainer}>
            {post &&
              post.map((item) => (
                <TouchableOpacity
                  key={item._id}
                  onPress={() =>
                    navigation.navigate("detailsScreen", { data: item })
                  }
                >
                  <Card
                    image={item.image}
                    title={item.title}
                    date={item.updatedAt}
                  />
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      )}
      <View style={styles.AddPost}>
        <TouchableOpacity onPress={() => navigation.navigate("createPost")}>
          <Image
            source={require("../assets/addIcon.png")}
            style={styles.AddPostImage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  AppContainer: {
    backgroundColor: "#f2eeed",
    flex: 1,
  },
  AddPost: {
    backgroundColor: "#f2eeed",
    width: "100%",
    height: 60,
    position: "absolute",
    bottom: 0,
    borderTopColor: "lightgray",
    borderWidth: 1,
    borderBottomColor: "transparent",
  },
  PostContainer: {
    marginTop: 20,
    marginBottom: 60,
  },
  AddPostImage: {
    width: 40,
    height: 40,
    marginLeft: "43%",
    marginTop: 3,
  },
});

export default HomeScreen;

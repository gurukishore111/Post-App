import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CreatePost } from "../screens/CreatePost";
import HomeScreen from "../screens/HomeScreen";
import ImagePickerScreen from "../screens/ImagePickerScreen";
import PostScreen from "../screens/PostScreen";
import TextScreen from "../screens/TextScreen";
import DetailsScreen from "../screens/DetailsScreen";
const Stack = createStackNavigator();

function MyStackTab() {
  return (
    <Stack.Navigator initialRouteName={HomeScreen}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="createPost"
        component={CreatePost}
        options={{ title: "Create Post" }}
      />
      <Stack.Screen
        name="imagePicker"
        component={ImagePickerScreen}
        options={{ title: "Pick an Image" }}
      />
      <Stack.Screen
        name="post"
        component={PostScreen}
        options={{ title: "Uploads" }}
      />
      <Stack.Screen
        name="textpost"
        component={TextScreen}
        options={{ title: "Uploads" }}
      />
      <Stack.Screen
        name="detailsScreen"
        component={DetailsScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
}

export default MyStackTab;

import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { addPost } from "../apicalls/service";

const TextScreen = ({ navigation }) => {
  const [title, onChangeTitle] = useState(null);

  const onSubmit = async () => {
    let formdata = new FormData();
    formdata.append("title", title);
    await addPost(formdata)
      .then((result) => {
        if (result._id) {
          onChangeTitle("");
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
          //   navigation.push("Home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          onChangeText={onChangeTitle}
          value={title}
          style={styles.input}
          multiline={true}
          placeholder="Write something about your post...."
        />
      </View>
      {/* <Text>{JSON.stringify(result.uri)}</Text> */}
      <View style={styles.postButtonSection}>
        <Button
          style={styles.postButton}
          title="post"
          color="gray"
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 250,
    margin: 12,
  },
  postTextSection: {
    width: "100%",
    height: "30%",
  },

  postButtonSection: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TextScreen;

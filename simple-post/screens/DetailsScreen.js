import moment from "moment";
import React from "react";
import { View, StyleSheet, Text, Linking, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

function DetailsScreen({ route }) {
  const { data } = route.params;
  const imageUrl = data.image.replace("localhost", "192.168.43.104");
  return (
    <View>
      <ScrollView>
        {data.image !== "" && (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        )}
        <Text style={styles.detailsContainer}>{data.title}</Text>
        <Text style={styles.time}>{moment(data.updatedAt).fromNow()}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
    fontSize: 17,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 300,
  },
  time: {
    padding: 10,
  },
});

export default DetailsScreen;

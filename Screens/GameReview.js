import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

function GameReview({ navigation }) {
  return (
    <View style={styles.gameReview}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>Rating - {navigation.getParam("rating")} *️⃣</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gameReview: {
    marginTop: 200,
    marginHorizontal: 100,
    borderColor: "#999",
    backgroundColor: "#be0",
    padding: 20,
    shadowColor: "#000",
  },
});
export default GameReview;

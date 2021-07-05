import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  Modal,
} from "react-native";
import ReviewFormView from "./ReviewFormView";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currReviews) => {
      return [review, ...currReviews];
    });
    setModalOpen(false);
  };
  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="fade">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Text
              style={{ ...styles.cancelModal, ...styles.openModal }}
              onPress={() => setModalOpen(false)}
            >
              ❌
            </Text>
            <ReviewFormView addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Text style={styles.openModal} onPress={() => setModalOpen(true)}>
        ➕
      </Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("GameReview", item)}
          >
            <Text style={styles.gameTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 50,
  },
  gameTitle: {
    padding: 16,
    width: 230,
    backgroundColor: "#ddd",
    borderRadius: 12,
    marginTop: 16,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  cancelModal: {
    paddingLeft: 60,
    marginVertical: 20,
    fontSize: 22,
  },
  openModal: {
    marginLeft: 80,
    fontSize: 22,
  },
});

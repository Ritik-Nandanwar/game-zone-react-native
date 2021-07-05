import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
const reviewSchema = yup.object({
  title: yup.string().required().min(3),
  body: yup.string().required().min(6),
  rating: yup
    .string()
    .required()
    .test("is-1-to-5", "Rating must be 1 to 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});
export default function ReviewFormView({ addReview }) {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={reviewSchema}
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          addReview(values);
          console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <TextInput
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              style={styles.innpField}
              placeholder="Enter title of game"
              onBlur={props.handleBlur("title")}
            />
            <Text style={styles.errMessage}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              style={styles.innpField}
              placeholder="Enter body of game"
              onBlur={props.handleBlur("body")}
            />
            <Text style={styles.errMessage}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              style={styles.innpField}
              keyboardType="numeric"
              placeholder="Enter rating of game (1 - 5)"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={styles.errMessage}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <Button
              title="Add Review"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  innpField: {
    borderColor: "#eee",
    borderWidth: 2,
    padding: 8,
    marginVertical: 16,
  },
  errMessage: {
    color: "crimson",
    fontWeight: "bold",
  },
});
// export default reviewFormView;

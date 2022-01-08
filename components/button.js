import * as React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={onPress}
    >
      <Text style={styles.btn_text}>Add a new Diary</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "auto",
    height: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "tomato",
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  btn_text: {
    fontWeight: "700",
    color: "white",
  },
});

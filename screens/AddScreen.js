import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

export default function AddScreen() {
  const [title, setTitle] = useState(null);
  const [Body, setBody] = useState(null);
  return (
    <>
      <View style={styles.contaner}>
        <Text style={styles.headings}>Title</Text>
        <TextInput
          placeholder="..."
          style={[styles.input, { paddingVertical: 5 }]}
          keyboardType="default"
          onChangeText={(val) => {
            setTitle(val);
          }}
        />
        <Text style={[styles.headings, { marginTop: 5 }]}>Body</Text>
        <TextInput
          placeholder="..."
          style={[
            styles.input,
            {
              height: 400,
              textAlignVertical: "top",
              paddingVertical: 7,
              marginBottom: 10,
            },
          ]}
          multiline
          onChangeText={(val) => {
            setBody(val);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          console.log("Title: ", title);
          console.log("Body: ", Body);
          setBody(null);
          setTitle(null);
        }}
      >
        <Text style={styles.submit_text}>Submit</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  contaner: {
    flex: 1 - 0.075,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  headings: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 5,
  },
  btn: {
    width: "100%",
    flex: 0.075,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  submit_text: {
    fontSize: 20,
    fontWeight: "800",
    color: "white",
  },
});

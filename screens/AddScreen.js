import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Random from 'expo-random';

function get_Dates(){
  let date = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  return `${date}-${month+1}-${year}`;
}

export default function AddScreen( { navigation } ) {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const append_data = async ()=>{
    if(title===null && body===null){
      ToastAndroid.showWithGravity("Blank Feilds are not tollerable", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      return;
    }
    let fetch_result = await AsyncStorage.getItem('Diary');
    if(fetch_result==null){
      let day = [{ Title:title, Body: body, Date: get_Dates(), key: Random.getRandomBytes(1)[0]}];
      day = JSON.stringify(day);
      await AsyncStorage.setItem('Diary',day);
    } else {
      let res = JSON.parse(fetch_result);
      res.push({ Title:title, Body: body, Date: get_Dates(), key: Random.getRandomBytes(1)[0]});
      res = JSON.stringify(res);
      await AsyncStorage.setItem('Diary',res);
    }
  }
  return (
    <>
      <View style={styles.container}>
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
        onPress={async () => {
          await append_data();
          setBody(null);
          setTitle(null);
          navigation.goBack();
        }}
      >
        <Text style={styles.submit_text}>Submit</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
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

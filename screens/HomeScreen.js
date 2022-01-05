import { Text, View, StyleSheet, FlatList } from "react-native";
import Button from "../components/button";
import Cards from "../components/cards";
import {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const diary_status = (items) => {
  if (items===null) {
    return <Text style={styles.no_Diaries}>No Diaries Yet</Text>;
  }
  const renderItem = ({ item }) => <Cards title={item.Title} date={"30 Nov 2021"}/>;
  return (
    <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.key} style={{ width: "100%", paddingHorizontal: 20 }}/>
  );
};

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const get_items = async ()=>{
    let items = await AsyncStorage.getItem('Diary')
    items = JSON.parse(items);
    setItems(items);
  }
  useEffect(async () => {
    await get_items();
  },[]);
  useEffect(async () => {
    await get_items();
  },[items]);
  return (
    <View style={styles.outer_container}>
      <View style={styles.heading}>
        <Text style={styles.heading_text}>Day Diary</Text>
      </View>
      <View style={styles.container}>{diary_status(items)}</View>
      <Button
        onPress={() => {
          navigation.navigate("Add");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outer_container: {
    flex: 1,
  },
  container: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  no_Diaries: {
    color: "#ccc",
    fontWeight: "bold",
    fontSize: 20,
  },
  heading: {
    flex: 0.1,
    paddingHorizontal: 20,
    justifyContent: "center",
    fontFamily: "Poppins_500Medium",
  },
  heading_text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

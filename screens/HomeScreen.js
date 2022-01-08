import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import Btn from "../components/button";
import Cards from "../components/cards";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);

  const diary_status = (items) => {
    if (items.length === 0) {
      return (
        <>
          <Text style={styles.no_Diaries}>No Diaries Yet</Text>
          <Text style={styles.no_Diaries}>
            Add a diary by clicking "Add a new day"
          </Text>
        </>
      );
    }
    const renderItem = ({ item }) => (
      <Cards
        title={item.Title}
        date={item.Date}
        onpress={() => {
          navigation.navigate("Diary", { item });
        }}
      />
    );
    return (
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        style={{ width: "100%", paddingHorizontal: 20 }}
      />
    );
  };

  const Delete_it = () => {
    setItems([]);
    AsyncStorage.removeItem("Diary");
  };

  const get_items = async () => {
    let items = await AsyncStorage.getItem("Diary");
    items = items === null ? [] : JSON.parse(items);
    setItems(items);
  };

  useEffect(async () => {
    await get_items();
  }, []);

  useEffect(async () => {
    await get_items();
  }, [items]);

  return (
    <View style={styles.outer_container}>
      <View style={styles.heading}>
        <TouchableOpacity onPress={Delete_it}>
          <Text style={styles.heading_text}>Day Diary</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>{diary_status(items)}</View>
      <Btn
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
  },
  heading_text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

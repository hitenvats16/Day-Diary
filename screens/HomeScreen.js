import { Text, View, StyleSheet, ScrollView } from "react-native";
import Button from "../components/button";
import Cards from "../components/cards";

const diary_status = (no_of_entries) => {
  if (no_of_entries == 0) {
    return <Text style={styles.no_Diaries}>No Diaries Yet</Text>;
  }
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={{ width: "100%", paddingHorizontal: 20 }}
    >
      <Cards title={"A wonderful day"} date={"20 Nov 2020"} />
      <Cards title={"A wonderful day"} date={"20 Nov 2020"} />
    </ScrollView>
  );
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.outer_container}>
      <View style={styles.heading}>
        <Text style={styles.heading_text}>Day Diary</Text>
      </View>
      <View style={styles.container}>{diary_status(2)}</View>
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

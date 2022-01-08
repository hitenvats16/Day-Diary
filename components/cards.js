import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Card({ title, date, onpress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onpress();
      }}
    >
      <View style={styles.card}>
        <View style={styles.text}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "grey",
            }}
          >
            {date}
          </Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="right" size={30} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 100,
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    marginVertical: 7
  },
  text: {
    flex: 0.9,
  },
  icon: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
});

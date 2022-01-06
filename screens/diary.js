import { View, Text, StyleSheet } from "react-native";

export default function Diary({ route }) {
  return (
    <View style={styles.container}>
      <View style={styles.date_subheader}>
        <Text>{route.params.item.Date}</Text>
      </View>
      <View style={styles.title_header}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {route.params.item.Title}
        </Text>
      </View>
      <View style={styles.Body}>
        <Text>{route.params.item.Body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title_header: {
    flex: 0.07,
    width: "100%",
    justifyContent: "center",
    alignItems: 'center'
  },
  date_subheader: {
    flex: 0.03,
    justifyContent: "center",
    width: "100%",
    alignItems: 'flex-end'
  },
  Body: {
    paddingTop: 5,
    flex: 1 - 0.1,
    width: "100%",
  },
});

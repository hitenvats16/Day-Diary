import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";
import Diary from "./screens/diary";
const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Day_Diary"
            component={Stacks}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{ headerTitleAlign: "center", title: "Add a New Day" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Diary"
        component={Diary}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  view: {
    width: 300,
    height: 300,
    backgroundColor: "black",
    margin: 5,
  },
});

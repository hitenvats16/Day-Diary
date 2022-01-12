import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Google from "expo-google-app-auth";

export default function SignIn() {
  const LogInHandler = async () => {
    const { type, accessToken, user } = await Google.logInAsync({
      androidClientId: `811912433792-f9ciajtg9c724tqt7o5jinkngbtk5082.apps.googleusercontent.com`,
      androidStandaloneAppClientId: `811912433792-eispt1dq7n05hpfe28e4tm9lghjmaq5p.apps.googleusercontent.com`,
    });
    if (type === "success") {
      let userInfoResponse = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      console.log(userInfoResponse);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signing Options</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          LogInHandler();
        }}
      >
        <AntDesign name="google" size={24} color="white" />
        <Text style={styles.txt}> Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    width: 200,
    borderRadius: 10,
    backgroundColor: "#516BEB",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  txt: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 50,
  },
});

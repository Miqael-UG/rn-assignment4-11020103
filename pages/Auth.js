import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import HorizontalBarOr from "../components/HorizontalBarOr"; // Adjust the path as necessary

export default function Auth({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authLogo}>Jobbiz</Text>
      <Text style={styles.authGreeting}>Hello Welcome 👋</Text>
      <Text style={styles.authDescription}>Let’s log in. Apply to jobs!</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.authInput}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.authInput}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.authButtonText}>Login</Text>
      </TouchableOpacity>

      <HorizontalBarOr />

      <View style={styles.auth}>
        <View style={styles.IconContainer}>
          <Image
            style={styles.Icon}
            source={require("../assets/cib_apple.png")}
          />
        </View>
        <View style={styles.IconContainer}>
          <Image
            style={styles.Icon}
            source={require("../assets/flat-color-icons_google.png")}
          />
        </View>
        <View style={styles.IconContainer}>
          <Image
            style={styles.Icon}
            source={require("../assets/ion_logo-facebook.png")}
          />
        </View>
      </View>

      <View style={styles.signup}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <Text style={styles.registerText}>Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FAFAFD",
    padding: 24,
  },
  authLogo: {
    fontWeight: "600",
    fontSize: 22,
    color: "#356899",
  },
  authGreeting: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "600",
  },
  authDescription: {
    marginTop: 8,
    fontSize: 14,
    color: "#9B9B9B",
  },
  authInput: {
    marginTop: 32,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  authButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    backgroundColor: "#356899",
    height: 56,
  },
  authButtonText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF",
  },
  auth: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
    padding: 12,
  },
  IconContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 50,
    shadowColor: "#0000002B",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30.84,
    elevation: 6,
  },
  Icon: {
    width: 26,
    height: 26,
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  signupText: {
    fontSize: 14,
    color: "#9B9B9B",
  },
  registerText: {
    fontSize: 14,
    color: "#356899",
    marginLeft: 4,
  },
});

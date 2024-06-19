import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HorizontalBarOr = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E8E8E8",
  },
  text: {
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#9B9B9B",
  },
});

export default HorizontalBarOr;

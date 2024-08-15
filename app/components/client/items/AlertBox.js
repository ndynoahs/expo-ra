import React from "react";
import { StyleSheet, Text, View } from "react-native";
const AlertBox = ({ message, isCompleted }) => {
  return (
    <View style={styles.alertBox(isCompleted)}>
      <Text style={styles.alertText(isCompleted)}>{message}</Text>
    </View>
  );
};

export default AlertBox;
const styles = StyleSheet.create({
  alertBox: (isCompleted) => ({
    backgroundColor: isCompleted ? "green" : "orange",
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  }),
  alertText: (isCompleted) => ({
    color: isCompleted ? "white" : "orange",
    fontWeight: 600,
  }),
});

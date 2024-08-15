import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const BudgetBox = ({ budget, changeValue }) => {
  const handleReduce = () => {
    if (budget > 1000) {
      changeValue(budget - 1000, "budget");
    }
  };

  const handleIncrease = () => {
    changeValue(budget + 1000, "budget");
  };
  return (
    <View style={styles.budgetBox}>
      <TouchableOpacity
        style={styles.reduceButton(budget)}
        onPress={handleReduce}
      >
        <FontAwesome name="minus" size={15} color="white" />
        <Text style={styles.iconText}>1000</Text>
      </TouchableOpacity>
      <View style={styles.budgetItems}>
        <Text style={styles.currency}>N</Text>
        <TextInput
          value={`${budget}`}
          style={styles.budgetInput}
          onChangeText={(text) => changeValue(text, "budget")}
        />
      </View>
      <TouchableOpacity style={styles.icons} onPress={handleIncrease}>
        <FontAwesome5 name="plus" size={15} color="white" />
        <Text style={styles.iconText}>1000</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BudgetBox;

const styles = StyleSheet.create({
  budgetBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 22,
    paddingHorizontal: 10,
    marginVertical: 7,
    width: "100%",
  },
  budgetItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: "35%",
    backgroundColor: "#D2E2E7",
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  currency: {
    fontSize: 16,
    fontWeight: "500",
  },
  budgetInput: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  icons: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#0086FE",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  iconText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  reduceButton: (budget) => ({
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: (budget === 1000 && "grey") || "#0086FE",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  }),
});

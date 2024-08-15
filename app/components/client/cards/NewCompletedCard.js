import React from "react";
import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const NewCompletedCard = ({ jobId, data, isClient, route }) => {
  const navigation = useNavigation();
  const handleDeleteHistory = () => {
    console.log("delted");
  };

  return (
    <Pressable
      onPress={() => navigation.navigate(route, { jobId: jobId })}
      //   onPress={() => navigation.navigate("jobDetails", { jobId: jobId })}
      style={styles.card}
    >
      <View style={styles.iconBox}>
        <MaterialIcons name="cleaning-services" size={24} color="black" />
      </View>
      <View style={styles.address}>
        <Text style={styles.mainText}>{data?.address}...</Text>
        <Text style={styles.subText}>29 Oct, 18:36, ₦{data?.budget}</Text>
      </View>
      {isClient ? (
        <Pressable
          onPress={() => navigation.navigate("PostJob", { jobId: jobId })}
          style={styles.reloadBox}
        >
          <Ionicons name="reload" size={24} color="black" />
          <Text>Rebook</Text>
        </Pressable>
      ) : (
        <Pressable onPress={handleDeleteHistory} style={styles.deleteBox}>
          <MaterialIcons name="delete-outline" size={24} color="red" />
        </Pressable>
      )}
    </Pressable>
  );
};

export default NewCompletedCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  iconBox: {
    backgroundColor: "#ebf5ff",
    padding: 10,
    borderRadius: 30,
  },
  address: {
    gap: 10,
  },
  mainText: {
    fontSize: 16,
  },
  subText: {
    fontSize: 13,
  },
  reloadBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#ebf5ff",
    // padding: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  deleteBox: {
    // alignItems: "center",
    // backgroundColor: "#ebf5ff",
    // padding: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
});

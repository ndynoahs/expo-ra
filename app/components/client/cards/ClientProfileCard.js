import React from "react";
import { Image, View, StyleSheet, Text, Pressable } from "react-native";
import AwaitingCard from "../cards/AwaitingCard";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ClientProfileCard = ({ name, ratings, imagePath }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          padding: 16,
          // justifyContent: "space-between",
        }}
      >
        <View style={styles.imageBox}>
          <Image style={styles.profileImage} source={imagePath} />
        </View>

        <View style={{ width: "65%", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 17 }}>{name}</Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, color: "#147efb" }}
            >
              2.02km
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, paddingVertical: 0 }}>
            <FontAwesome name="star" size={15} color="#FF9529" />
            <Text style={{ fontSize: 14, fontWeight: "300" }}>{ratings}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <AntDesign name="checkcircleo" size={15} color="#147efb" />
            <Text style={{ fontWeight: "300", fontSize: 14 }}>
              14 job requests
            </Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate("cleanerProfile")}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          paddingVertical: 10,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: "#EBF5FF",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 14, color: "#147efb" }}>
          View Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default ClientProfileCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 15,
    width: "100%",
  },
  imageBox: {
    width: "30%",
  },
  profileImage: {
    borderRadius: 10,
    width: 99,
    height: 80,
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
});

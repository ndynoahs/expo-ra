import React from "react";
import { Image, View, StyleSheet, Text, Pressable } from "react-native";
import AwaitingCard from "../cards/AwaitingCard";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const WorkerNegotionCard = ({
  toggleBottomSheet,
  name,
  amount,
  time,
  imagePath,
}) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.profileImage} source={imagePath} />
          <View style={{ justifyContent: "space-between" }}>
            <Text style={{ fontWeight: 600, fontSize: 17 }}>{name}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome name="star" size={15} color="gold" />
              <Text style={{ fontSize: 16 }}>4.5(8)</Text>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            {/* <AntDesign name="checkcircleo" size={15} color="#147efb" /> */}
            <AntDesign name="clockcircleo" size={15} color="#147efb" />
            <Text
              style={{ fontWeight: "bold", fontSize: 17, color: "#147efb" }}
            >
              {time}mins
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>N{amount}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 9,
          width: "100%",
        }}
      >
        <Pressable
          onPress={() => router.replace("/signup")}
          style={styles.buttonReject}
        >
          <Text style={styles.buttonText}>Reject </Text>
        </Pressable>
        {/* <Pressable onPress={toggleBottomSheet} style={styles.button}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 14,
              color: "black",
            }}
          >
            N12,500
          </Text>
        </Pressable> */}

        <Pressable
          onPress={() => toggleBottomSheet("accept")}
          style={styles.buttonAccept}
        >
          <Text style={styles.buttonText}>Accept </Text>
        </Pressable>
      </View>
      {/* <Pressable
        onPress={() => router.replace("/bids")}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: "#ebf5ff",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 16, color: "#147efb" }}>
          View Job
        </Text>
      </Pressable> */}
    </View>
  );
};

export default WorkerNegotionCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#147efb",
    borderWidth: 0.3,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 10,
    marginVertical: 20,
  },

  container: {
    // borderWidth:1,
    borderRadius: 10,
    borderTopWidth: 2,
    borderBlockColor: "green",
    width: "100%",
    backgroundColor: "white",
    marginVertical: 20,
    paddingVertical: 5,
  },
  profileImage: {
    width: 70,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },

  button: {
    width: "30%",
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "#E3E3E3",
  },
  buttonAccept: {
    width: "30%",
    backgroundColor: "#198038",
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buttonReject: {
    width: "30%",
    backgroundColor: "#E5524A",
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 13,
    color: "white",
  },

  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

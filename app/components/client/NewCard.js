import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import AwaitingBid from "./dashboard/AwaitingBid";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const NewCard = ({ children }) => {
  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingTop: 10,
            }}
          >
            <Text style={{ fontWeight: 600 }}>01 Feb 24</Text>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "red",
                paddingHorizontal: 7,
                paddingVertical: 2,
                borderRadius: 90,
              }}
            >
              <Text style={{ color: "white", fontSize: 10, fontWeight: 700 }}>
                1
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: 15,
              paddingTop: 15,
              paddingHorizontal: 5,
            }}
          >
            <Entypo name="location-pin" size={34} color="#147efb" />
            <Text style={{ width: 330, fontWeight: 600, lineHeight: 25 }}>
              No 22B Finhare Close, Adekunmo Street Jogunpa, Lagos
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 17,
              paddingTop: 15,
              paddingHorizontal: 20,
            }}
          >
            <View style={styles.optionsBox}>
              <Text>2 Living rooms </Text>
            </View>
            <View style={styles.optionsBox}>
              <Text>3 Bedrooms </Text>
            </View>
            <View style={styles.optionsBox}>
              <Text>2 bathrooms </Text>
            </View>
          </View>
          {/* <Pressable  onPress={() => router.replace("/bids")} style={{flexDirection:"row",justifyContent:"flex-end", width:379, paddingVertical:1, paddingHorizontal:20,borderRadius:10,backgroundColor:"#ebf5ff",paddingVertical:10, marginTop:15}}>
        <FontAwesome name="angle-down" size={24} color="black" />
      </Pressable> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderRightWidth: 0.8,
    borderLeftWidth: 0.8,

    // borderWidth:0.3,

    // Apply shadow properties for iOS
    shadowColor: "black",
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    // Apply elevation for Android
    elevation: 5,
    marginVertical: 10,
    width: 380,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 15,
    paddingVertical: 1,
  },

  optionsBox: {
    padding: 4,
    borderWidth: 0.9,
    borderRadius: 10,
    borderBlockColor: "#147efb",
    backgroundColor: "#ebf5ff",
  },
});

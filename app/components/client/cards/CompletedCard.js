import React, { useEffect } from "react";
import { Image, View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { fetchWorker } from "../../../lib/user";
import { useState } from "react";

const CompletedCard = ({ jobId, data, isClient }) => {
  const navigation = useNavigation();
  const [workerInfo, setWorkerInfo] = useState({});
  const { awardedTo } = data;

  const tr = fetchWorker(awardedTo);

  useEffect(() => {
    fetchWorker(awardedTo, setWorkerInfo);
  }, []);

  // console.log(fetchWorker(awardedTo));
  console.log(tr.fullName, workerInfo, "workerInfoi");

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
          <Image
            style={styles.profileImage}
            source={require("../../../assets/images/profile_img_2.png")}
          />
          <View style={{ justifyContent: "space-between" }}>
            <Text style={{ fontWeight: 600, fontSize: 17 }}>Favour Ayoba</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome name="star" size={15} color="gold" />
              <Text style={{ fontSize: 16 }}>4.5(8)</Text>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <AntDesign name="checkcircleo" size={15} color="#147efb" />
            <Text
              style={{ fontWeight: "bold", fontSize: 17, color: "#147efb" }}
            >
              42mins
            </Text>
          </View>
          <View style={{ backgroundColor: "green", borderRadius: 8 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "white",
                padding: 5,
                borderRadius: 50,
              }}
            >
              N{data.budget}
            </Text>
          </View>
        </View>
      </View>

      {isClient ? (
        <Pressable
          onPress={() => navigation.navigate("jobDetails", { jobId: jobId })}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "full",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 14, color: "#147efb" }}>
            View Job
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() =>
            navigation.navigate("workerJobDetailsPage", { jobId: jobId })
          }
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "full",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 14, color: "#147efb" }}>
            View Job
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default CompletedCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    paddingVertical: 10,
    // width:"%",
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
    width: "auto",
    borderBlockColor: "#147efb",
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buttonAccept: {
    width: "auto",
    backgroundColor: "green",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buttonReject: {
    width: "auto",
    backgroundColor: "red",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
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

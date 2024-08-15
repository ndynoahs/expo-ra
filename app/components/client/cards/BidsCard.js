import React from "react";
import { Image, View, StyleSheet, Text, Pressable } from "react-native";
import AwaitingCard from "../cards/AwaitingCard";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Bid = ({
  toggleBottomSheet,
  name,
  bidId,
  amount,
  time,
  imagePath,
  bid,
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
          <Image
            style={styles.profileImage}
            // source={require( "../../../assets/images/femalecleaner-1.webp")}
            source={imagePath}
            // source={{ uri: imagePath }}
          />
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
              style={{ fontWeight: "bold", fontSize: 16, color: "#147efb" }}
            >
              {time}min
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>N{amount}</Text>
        </View>
      </View>
      {/* <Text
        style={{
          fontWeight: "700",
          fontSize: 16,
          color: "black",
          paddingVertical: 10,
          textAlign: "center",
        }}
      >
        {bid.message}
      </Text> */}
      {bid.status !== "awarded" ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginVertical: 9,
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => toggleBottomSheet(amount)}
            style={styles.button}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 14,
                color: "black",
              }}
            >
              Counter Offer{" "}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => toggleBottomSheet("accept", amount, bid)}
            style={styles.buttonAccept}
          >
            <Text style={styles.buttonText}>Accept </Text>
          </Pressable>
          {/*             
            <Pressable
            onPress={() => router.replace("/signup")}
            style={styles.buttonReject}
            >
            <Text style={styles.buttonText}>Reject Offer </Text>
            </Pressable> */}
        </View>
      ) : (
        <View
          onPress={() => navigation.navigate("cleanerProfile")}
          style={{
            width: "100%",
            backgroundColor: "gray",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              color: "white",
              paddingVertical: 10,
              textAlign: "center",
            }}
          >
            Accepted
          </Text>
        </View>
      )}
      {/* <Pressable  onPress={() => router.replace("/bids")} style={{flexDirection:"row",justifyContent:"center", width:"full", paddingVertical:10, paddingHorizontal:20,marginTop:10, borderRadius:10,backgroundColor:"#ebf5ff",}}>
            <Text style={{fontWeight:"500", fontSize:16,color:"#147efb"}}>View Profile</Text>
        </Pressable>   */}
    </View>
  );
};

export default Bid;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
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
    width: "99%",
  },

  profileImage: {
    width: 70,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },

  button: {
    width: "45%",
    borderColor: "#147efb",
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  buttonAccept: {
    width: "45%",
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

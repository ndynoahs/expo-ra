import { Text, View, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
const InprogressCard = ({ jobId, data }) => {
  const navigation = useNavigation();

  const Step = () => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#147efb",
          width: "20%",
          height: 12,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            width: 5,
            height: 5,
            backgroundColor: "white",
          }}
        >
          <Text></Text>
        </View>
      </View>
    );
  };
  return (
    <View style={style.card}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingTop: 10,
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#147efb",
            textDecorationLine: "underline",
          }}
        >
          Favour Ayoba
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 700 }}>N{data.budget}</Text>
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
        <Ionicons name="location" size={34} color="#147efb" />
        <Text style={{ width: "85%", fontWeight: 600, lineHeight: 25 }}>
          {data.address}
        </Text>
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ebf5ff",
          width: "auto",
          height: 12,
          borderRadius: 50,
          marginVertical: 10,
        }}
      >
        <Step />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#147efb",
            width: "25%",
            height: 12,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              width: 5,
              height: 5,
              backgroundColor: "white",
            }}
          >
            <Text></Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ebf5ff",
            width: "25%",
            height: 12,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              width: 5,
              height: 5,
              backgroundColor: "#147efb",
              margin: 5,
            }}
          >
            <Text></Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ebf5ff",
            width: "25%",
            height: 12,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              width: 5,
              height: 5,
              backgroundColor: "#147efb",
              margin: 5,
            }}
          >
            <Text></Text>
          </View>
        </View>
      </View> */}

      <Pressable
        onPress={() => navigation.navigate("jobDetails", { jobId: jobId })}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          paddingVertical: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: "#ebf5ff",
          marginTop: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 14, color: "#147efb" }}>
          {" "}
          View Job
        </Text>
      </Pressable>
    </View>
  );
};

export default InprogressCard;
const style = StyleSheet.create({
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
    paddingVertical: 1,
    width: "95%",
  },
  box: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderRadius: 10,
    marginVertical: 15,
    paddingVertical: 1,
    width: "95%",
  },
  optionsBox: {
    paddingHorizontal: 19,
    paddingVertical: 5,
    borderWidth: 0.9,
    borderRadius: 10,
    borderBlockColor: "#147efb",
    backgroundColor: "#ebf5ff",
  },
});

import { Text, View, StyleSheet, Pressable, Touchable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BidsJobDetailsCard = ({ data, jobId, user, isBidPage }) => {
  const navigation = useNavigation();

  console.log(jobId, "yoo");

  return (
    <Pressable
      style={style.card}
      onPress={() => navigation.navigate("jobDetails", { jobId: jobId })}
    >
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ fontWeight: 600 }}>{data?.createdAt}</Text>
          {/* <View style={{ backgroundColor: "green", borderRadius: 8 }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "white",
                padding: 5,
                borderRadius: 50,
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              N{data.budget}
            </Text>
          </View> */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "red",
              paddingHorizontal: 8,
              paddingVertical: 5,
              borderRadius: 90,
            }}
          >
            <Text style={{ color: "white", fontSize: 11, fontWeight: 800 }}>
              0
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            gap: 20,
            paddingTop: 10,
          }}
        >
          <View style={style.optionsBox}>
            <Text style={style.optionsBoxText}>
              {data?.livingRoom} Living rooms{" "}
            </Text>
          </View>
          <View style={style.optionsBox}>
            <Text style={style.optionsBoxText}>{data?.bedRoom} Bedrooms </Text>
          </View>
          <View style={style.optionsBox}>
            <Text style={style.optionsBoxText}>
              {data?.bathRoom} bathrooms{" "}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingTop: 15,
            paddingHorizontal: 5,
          }}
        >
          <Entypo name="location-pin" size={25} color="#147efb" />
          <Text
            style={{
              width: "95%",
              flexWrap: "wrap",
              fontWeight: 500,
              lineHeight: 25,
            }}
          >
            {data?.address}
          </Text>
        </View>
      </View>
      <View
        onPress={() => navigation.navigate("jobDetails", { jobId: jobId })}
        style={style.button(isBidPage)}
      >
        <Text style={{ fontWeight: 600, lineHeight: 25 }}>
          View job details
        </Text>
      </View>
    </Pressable>
  );
};

export default BidsJobDetailsCard;
const style = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#147efb",
    borderWidth: 0.2,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 15,
    // paddingVertical: 15,
    // paddingHorizontal:5
  },

  optionsBox: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderWidth: 0.9,
    borderRadius: 10,
    borderColor: "#147efb",
    backgroundColor: "#ebf5ff",
  },
  optionsBoxText: {
    fontSize: 12,
    fontWeight: "400",
  },
  button: (isBidPage) => ({
    width: `${isBidPage ? "40%" : "30%"}`,
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: "#ebf5ff",
    borderWidth: 0.7,
    borderColor: "#147efb",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    alignSelf: "flex-end",
  }),
});

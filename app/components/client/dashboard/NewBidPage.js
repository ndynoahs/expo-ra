import React from "react";
import { Image, Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import BidsCard from "../cards/BidsCard";
import Header from "../../Header";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const NewBidPage = () => {
  const navigation = useNavigation();

  // const handleCancel = () => {
  //   navigation.navigate("test");
  //   console.log;
  // };
  return (
    <View style={styles.container}>
      <Image
        blurRadius={70}
        source={require("../../../assets/images/bg.png")}
        style={styles.bgImage}
      />
      <View style={styles.cancelBox}>
        <Pressable onPress={() => navigation.navigate("tabScreen")}>
          <Text style={styles.cancelText}> Cancel</Text>
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BidsCard
          name="Funmi"
          amount={9000}
          time={25}
          imagePath={require(".../../../assets/images/profile_img_2.png")}
        />
        <BidsCard
          name="Funmi"
          amount={9000}
          time={25}
          imagePath={require(".../../../assets/images/woman-cleaning-2.jpg")}
        />
        <BidsCard
          name="Funmi"
          amount={9000}
          time={25}
          imagePath={require(".../../../assets/images/femalecleaner-1.webp")}
        />
      </ScrollView>
    </View>
  );
};

export default NewBidPage;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    // alignItems: "center",
  },
  bgImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  cancelBox: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "flex-end",
  },
  cancelText: {
    color: "red",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

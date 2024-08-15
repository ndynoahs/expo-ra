import React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackNavRounded = ({ pageTitle, showModal }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={navigation.goBack}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ebf5ff",
        width: 65,
        height: 65,
        borderRadius: 40,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
      }}
    >
      <AntDesign name="left" size={21} color="black" />
      <Text
        style={{
          fontWeight: "500",
          fontSize: 16,
          color: "black",
          paddingLeft: 9,
        }}
      >
        {pageTitle}
      </Text>
    </Pressable>
  );
};

export default BackNavRounded;

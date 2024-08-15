import React from "react";
import { Text } from "react-native";
import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const CustomButton = ({ text, bgOutline, onClick, loading, isTrue }) => {
  return (
    <Pressable
      onPress={onClick}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        backgroundColor: `${bgOutline ? "#0086FE" : ""}`,
        borderColor: `${bgOutline ? "#0086FE" : "red"}`,
        borderWidth: 0.7,
        borderRadius: 8,
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: 15,
        marginTop: 5,
        marginBottom: 20,
        gap: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: `${bgOutline ? "white" : "red"}`,
        }}
      >
        {loading ? "...loading" : text}
      </Text>
      {/* <MaterialIcons name="check-circle" size={22} color="white" /> */}
      {/* <AntDesign name="checkcircleo" size={22} color="white" /> */}
    </Pressable>
  );
};

export default CustomButton;

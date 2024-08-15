import { View, Text } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#4c00b0",
        height: 50,
        width: 300,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
        {props.name}
      </Text>
    </View>
  );
};

export default Header;

import React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getHeaderTitle } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const BackNavigation = ({ pageTitle, showModal }) => {
  const navigation = useNavigation();
  // header: ({ navigation, route, options, back }) => {
  // const title = getHeaderTitle(options, route.name);

  return (
    // <Pressable onPress={() => router.replace({url})} style={{flexDirection:"row", alignItems:"center",paddingLeft:20, backgroundColor:"#ebf5ff", width:400, height:70}} >
    // <AntDesign name="arrowleft" size={24} color="black"/>
    // <Text style={{fontWeight:"500",fontSize:16,color:"black",paddingLeft:9 }}>{pageTitle}</Text>
    // </Pressable>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
        backgroundColor: "#ebf5ff",
        width: "100%",
        height: 60,
      }}
    >
      <Pressable
        onPress={navigation.goBack}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <AntDesign name="left" size={24} color="black" />
        {/* <AntDesign name="arrowleft" size={24} color="black" /> */}
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

      {/* <Text style={{ paddingRight: 20 }}> Edit</Text> */}
      {/* <SimpleLineIcons
        onPress={showModal}
        style={{ paddingRight: 20 }}
        name="options"
        size={20}
        color="black"
      /> */}
    </View>
  );
};

export default BackNavigation;

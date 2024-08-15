import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Header = ({ activeTab, setActiveTab, tabs }) => {
  const user = useSelector((state) => state.user.user);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <View style={styles.profileBox}>
            <Image
              style={styles.profileImage}
              source={require("../assets/images/profile_img_2.png")}
            />
            <Text style={styles.userName}> Hi, {user?.fullName}!</Text>
          </View>
        </TouchableOpacity>

        {/* <Image 
          style={{ width: 200, height: 70, resizeMode: "contain" }}
          source={require( "../assets/klinvas-latv.jpg")}                
        /> */}
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Octicons name="bell-fill" size={22} color="black" />
          <View
            style={{
              padding: 3,
              backgroundColor: "red",
              borderRadius: "360%",
              position: "absolute",
              right: 0,
              borderWidth: 2,
              borderColor: "white",
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#EBF5FF",
    paddingHorizontal: 15,
    paddingVertical: 15,

    position: "",
    zIndex: 10,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontWeight: "600",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});

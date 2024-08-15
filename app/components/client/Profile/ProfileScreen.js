import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../action/jobsAction";

const ProfileScreen = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  signOutUser = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      navigate("Auth");
      dispatch(logoutUser());
    } catch (e) {
      console.log(e);
    }
  };

  const Stack = createStackNavigator();
  const navigation = useNavigation();

  const Profile = () => {
    return (
      <View style={styles.container}>
        <View style={styles.profileImgBox}>
          <Image
            style={styles.profileImage}
            source={require("../../../assets/images/profile_img_2.png")}
          />
          <Ionicons
            name="camera-outline"
            size={24}
            color="black"
            paddingTop={10}
          />
          <Text style={styles.profileName}> {user?.fullName}</Text>
          <View style={styles.ratings}>
            <Ionicons
              name="star"
              size={18}
              color=""
              style={styles.ratingIcon}
            />
            <Ionicons
              name="star"
              size={18}
              color=""
              style={styles.ratingIcon}
            />
            <Ionicons
              name="star"
              size={18}
              color=""
              style={styles.ratingIcon}
            />
            <Ionicons
              name="star"
              size={18}
              color=""
              style={styles.ratingIcon}
            />
            <Ionicons
              name="star"
              size={18}
              color=""
              style={styles.ratingIcon}
            />
            <Text>13</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Pressable onPress={() => navigation.navigate("EditProfile")}>
            <View style={styles.profileItems}>
              <Text style={styles.label}> Account</Text>
              <Text style={styles.label}>{user?.email}</Text>
              <Pressable onPress={() => navigation.navigate("EditProfile")}>
                <FontAwesome
                  name="angle-right"
                  size={24}
                  style={styles.iconColor}
                />
              </Pressable>
            </View>
          </Pressable>

          {/* <View style={styles.profileItems}>
                    <Text style={styles.label}> Phone</Text>
                    <Text style={styles.label}>{User.number || "+234 703 620 519"} </Text> 
                </View> */}
          <View style={styles.profileItems}>
            <Text style={styles.label}> Change Password</Text>
            {/* <FontAwesome name="angle-right" size={24} style={styles.iconColor} />   */}
            <Pressable onPress={() => navigation.navigate("ChangePassword")}>
              <FontAwesome
                name="angle-right"
                size={24}
                style={styles.iconColor}
              />
            </Pressable>
          </View>
          {/* <View style={styles.profileItems}>
                    <Text style={styles.label}> Gallery</Text> 
                    <Pressable onPress={() => navigation.navigate('Gallery')}>
                        <FontAwesome name="angle-right" size={24} style={styles.iconColor} />            
                    </Pressable>             
                </View> */}
          <View style={styles.profileItems}>
            <Text style={styles.label}> Reviews</Text>
            <Pressable onPress={() => navigation.navigate("Reviews")}>
              <FontAwesome
                name="angle-right"
                size={24}
                style={styles.iconColor}
              />
            </Pressable>
          </View>
        </View>

        <Pressable
          // onPress={() => router.replace("/bids")}
          style={{ paddingVertical: 10 }}
        >
          <Text style={styles.buttonText}>
            {" "}
            {(user.userRole === "worker" && " Become a Customer") ||
              "Become a Worker"}
          </Text>
        </Pressable>
        <Pressable onPress={() => router.replace("#")} style={styles.button}>
          <MaterialIcons name="error" size={30} color="#E5524A" />
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Complete KYC
          </Text>
        </Pressable>
        <Pressable onPress={signOutUser} style={styles.logoutBtn}>
          <Feather name="log-in" size={24} color="white" />
          <Text style={{ color: "white", fontWeight: "bold" }}>Logout</Text>
        </Pressable>

        {/* <Pressable  onPress={signOutUser} style={{ paddingVertical:10,}}>
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable> */}
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reviews"
        component={Reviews}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    backgroundColor: "#FAFDFF",
    height: "100%",
  },
  box: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 35,
  },
  profileImgBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 60,
  },
  profileName: {
    fontWeight: "600",
    fontSize: 15,
    marginTop: 15,
  },

  ratings: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 9,
  },
  label: {
    fontSize: 15,
    color: "black",
  },

  iconColor: {
    color: "#147efb",
  },
  ratingIcon: {
    color: "#00CCE7",
  },

  profileItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  buttonText: {
    color: "#147efb",
    textAlign: "center",
    fontWeight: "500",
    marginTop: 30,
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: "black",
    paddingVertical: 10,
    borderRadius: "180%",
    width: 350,
    marginTop: 20,
  },
  logoutBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#E5524A",
    paddingVertical: 10,
    borderRadius: "180%",
    width: 350,
    height: 45,
    marginTop: 20,
  },
});

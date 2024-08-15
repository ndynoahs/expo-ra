import React, { useState, useEffect } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../../Header";
import { NavigationContainer } from "@react-navigation/native";
import AwaitingBid from "./AwaitingBid";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import NewCard from "../NewCard";
import Inprogress from "./Inprogress";
import TabSwitch from "../tabs/Tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Bids from "./Bids";
import CompletedTab from "./Completed";
import JobDetails from "./JobDetails";
import CleanerProfile from "./CleanerProfile";
import { useDispatch } from "react-redux";
import { setUser } from "../../../action/userAction";
import { doc, getDoc } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../firebaseConfig";
import WorkerJobDetailsPage from "./WorkerJobDetailsPage";
import MyPaymentButton from "./MyPaymentButton";
import { storeData } from "../../../utils/asyncStorage";

const DashBoardLayout = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const currentUser = FIREBASE_AUTH.currentUser;

    try {
      if (currentUser) {
        const docRef = doc(FIREBASE_DB, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        dispatch(setUser(docSnap.data(), currentUser.uid));
        storeData("userUId", currentUser.uid);
        // console.log(docSnap.data(), "docSnap user");
      }
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const Stack = createStackNavigator();

  const tabs = ["Awaiting Bid", "In Progress", "Completed"];
  const workerTab = ["Jobs Nearby", "In Progress", "Completed"];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Awaiting Bid":
        return <AwaitingBid />;

      case "In Progress":
        return <Inprogress />;

      case "Completed":
        return <CompletedTab />;

      default:
        return null;
    }
  };

  const TabScreen = () => {
    return (
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <Header />

        <TabSwitch
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {displayTabContent()}
        </ScrollView>
      </View>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabScreen"
        component={TabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="bids"
        component={Bids}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="jobDetails"
        component={JobDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="workerJobDetailsPage"
        component={WorkerJobDetailsPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="cleanerProfile"
        component={CleanerProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="myPaymentButton"
        component={MyPaymentButton}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="notification" component={CashOut} options={{headerShown:false}} /> */}
    </Stack.Navigator>
  );
};

export default DashBoardLayout;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    // Apply shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Apply elevation for Android
    elevation: 5,
    marginVertical: 50,
  },
  cardContent: {
    padding: 16,
  },
  optionsBox: {
    padding: 4,
    borderWidth: 0.9,
    borderRadius: 10,
    borderBlockColor: "#147efb",
    backgroundColor: "#ebf5ff",
  },
});

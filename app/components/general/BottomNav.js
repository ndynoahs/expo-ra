import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DashBoardLayout from "../client/dashboard/DashBoardLayout";
import ProfileScreen from "../client/Profile/ProfileScreen";
import Wallet from "../client/Wallet/Wallet";
import PostJob from "../client/postjob/PostJob";
import ChatScreen from "../chat/ChatScreen";
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          display: "flex",
        },
        tabBarItemStyle: {
          borderRadius: 10,
          marginHorizontal: 5,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashBoardLayout}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <MaterialIcons name="dashboard" size={size} color={color} />
              <Text style={styles.tabText}>Dashboard</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          title: "Base",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <MaterialIcons
                name="account-balance-wallet"
                size={size}
                color={color}
              />
              <Text style={styles.tabText}>Wallet</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PostJob"
        component={PostJob}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <AntDesign name="pluscircle" size={size} color={color} />
              <Text style={styles.tabText}>Post a Job</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <Ionicons name="person-sharp" size={size} color={color} />
              <Text style={styles.tabText}>Profile</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <Ionicons name="chatbox-ellipses" color={color} size={size} />
              <Text style={styles.tabText}>Chat</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 11,
    marginTop: 5,
  },
});

export default BottomNav;

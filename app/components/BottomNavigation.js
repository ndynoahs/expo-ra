
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => (
  <View style={styles.container}>
    <Text>Dashboard</Text>
  </View>
);

const WalletScreen = () => (
  <View style={styles.container}>
    <Text>Wallet</Text>
  </View>
);

const PostJobScreen = () => (
  <View style={styles.container}>
    <Text>Post a Job</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile</Text>
  </View>
);

const ChatScreen = () => (
  <View style={styles.container}>
    <Text>Chat</Text>
  </View>
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          elevation: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'black',
          shadowOpacity: 0.5,
          shadowRadius: 10,
          height:20
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
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
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <MaterialIcons name="account-balance-wallet" size={size} color={color} />
              <Text style={styles.tabText}>Wallet</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PostJob"
        component={PostJobScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <AntDesign name="pluscircle" size={size} color={color} />
              <Text style={styles.tabText}>Post a Job</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <Ionicons name="person-sharp" size={size} color={color}/>
              <Text style={styles.tabText}>Profile</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabItem}>
              <Ionicons name="chatbox-ellipses"color={color} size={size}  />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default BottomNavigation;

import React from "react";
import { View } from "react-native";
import BottomNav from "../../components/general/BottomNav";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../../components/Header/Notification";
import { useSelector } from "react-redux";
import WokerDashBoard from "../../components/worker/pages/WokerDashBoard";
import NewBidPage from "../../components/client/dashboard/NewBidPage";

const LooggedPage = () => {
  const Stack = createStackNavigator();
  const user = useSelector((state) => state.user.user);
  const isClient = user?.userRole === "client" ? true : false;
  console.log(user?.userRole);

  return (
    <View style={{ height: "100%" }}>
      {/* {isClient ? ( */}
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={BottomNav}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewBidPage"
          component={NewBidPage}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
      {/* ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="WokerDashBoard"
            component={WokerDashBoard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )} */}
    </View>
  );
};

export default LooggedPage;

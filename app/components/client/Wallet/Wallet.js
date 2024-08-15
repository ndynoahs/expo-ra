import React from 'react';
import WalletSettings from './WalletSettings';
import WalletDash from './WalletDash';
import CashOut from './CashOut';
import { createStackNavigator } from '@react-navigation/stack';
const WalletScreen = () => {

  const Stack = createStackNavigator();
  
  return (
    <Stack.Navigator>
    <Stack.Screen name="WalletDash" component={WalletDash} options={{headerShown:false}}/>
    <Stack.Screen name="WalletSettings" component={WalletSettings} options={{headerShown:false}} />
    <Stack.Screen name="CashOut" component={CashOut} options={{headerShown:false}} />
    </Stack.Navigator>

  );
};

export default WalletScreen;

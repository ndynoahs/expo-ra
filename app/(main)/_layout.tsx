import { Stack } from 'expo-router';
import 'react-native-url-polyfill/auto';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'yellow', // It should be yellow color
        },
      }}
    >
      <Stack.Screen name="home" options={{ headerShown: true }} />
      {/* <Stack.Screen name="dashboard" options={{headerShown:false}}/> */}
      {/* <Stack.Screen name="bids" options={{ headerShown: false }} />
      <Stack.Screen
        name="NewBidPage"
        component={NewBidPage}
        options={{ headerShown: false }}
      /> */}
    </Stack>
  );
}

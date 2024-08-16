import { Stack } from 'expo-router';
import NewBidPage from '../../components/client/dashboard/NewBidPage';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="loggedPage" options={{ headerShown: false }} />
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

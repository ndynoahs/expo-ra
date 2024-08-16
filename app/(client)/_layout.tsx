import { Stack } from 'expo-router';
import 'react-native-url-polyfill/auto';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'brown', // It should be yellow color
        },
      }}
    >
      <Stack.Screen name="test" options={{ headerShown: true }} />
    </Stack>
  );
}

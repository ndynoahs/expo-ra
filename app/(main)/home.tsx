import { View, Text } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <ThemedView>
      <ThemedText>Home</ThemedText>

      <View className="w-1/2 h-30 bg-blue-700 rounded-md items-center">
        <Link href="/(tabs)/" className="text-xl text-white my-4 ">
          Go to tabs screen
        </Link>
      </View>
    </ThemedView>
  );
}

import { View, Text } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Home() {
  return (
    <ThemedView>
      <ThemedText>Home</ThemedText>
    </ThemedView>
  );
}

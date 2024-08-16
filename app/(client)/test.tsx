import { View, Text } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Test() {
  return (
    <ThemedView className="h-full">
      <ThemedText>Test Page</ThemedText>
    </ThemedView>
  );
}

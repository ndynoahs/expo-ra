import React from 'react';
import { View } from 'react-native';
import 'react-native-url-polyfill/auto';
import { ThemedText } from '@/components/ThemedText';

const LoggedPage = () => {
  return (
    <View style={{ height: '100%' }}>
      <ThemedText>Hey</ThemedText>
    </View>
  );
};

export default LoggedPage;

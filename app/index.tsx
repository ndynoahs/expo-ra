import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Button,
  Role,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { HelloWave } from '@/components/HelloWave';
import { FlatList } from 'react-native';
import { selectRole, setRole } from '@/store/slice/role';
import { router } from 'expo-router';

const IndexLayout = () => {
  const item = [
    {
      id: 1,
      title: 'Join as a client',
      role: 'client',
    },
    {
      id: 2,
      title: 'Go to main',
      role: 'user',
    },
  ];
  const [selectedItem, setSelectedItem] = useState(item[0]);
  const role = useSelector(selectRole);
  const dispatch = useDispatch();

  const handleRole = (role: string) => {
    dispatch(setRole(role as any));
  };

  console.log(role);

  return (
    <ThemedView className="flex-1 w-full">
      <View className="">
        <View className="bg-slate-900">
          <Image source={require('@/assets/images/partial-react-logo.png')} />
        </View>

        <ThemedView className="my-5 w-full px-6">
          <ThemedView className="flex-row items-center w-full my-1">
            <ThemedText className="font-bold text-3xl">Welcome!</ThemedText>
            <HelloWave />
          </ThemedView>
          <FlatList
            data={item}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  className={`h-20 w-10/12 border-2 mb-10 rounded-xl items-center justify-center ${
                    selectedItem.id === item.id
                      ? 'border-green-500'
                      : 'border-gray-400'
                  }`}
                  onPress={() => {
                    setSelectedItem(item);
                    handleRole(item.role!);
                  }}
                >
                  <Text className="font-extrabold text-3xl">{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />

          <Button
            onPress={() => {
              if (role === 'client') {
                console.log(role);
                router.push('/(client)/test');
              } else if (role === 'user') {
                router.push('/home');
              }
            }}
            title={selectedItem.title}
          />
        </ThemedView>
      </View>
    </ThemedView>
  );
};

export default IndexLayout;

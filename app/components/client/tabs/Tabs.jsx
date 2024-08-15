import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View, Pressable } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <Pressable
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </Pressable>
  );
}

const TabSwitch = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{width:"100%", flexDirection:"row", justifyContent:"space-between"}}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        // contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default TabSwitch;



import React from 'react'
import { Pressable, Text, View } from 'react-native'
import TabSwitch from '../tabs/Tabs';
import { useState } from 'react';
import BankDetails from './BankDetails';
import { router } from 'expo-router';
import BackNavigation from '../../general/BackNavigation';
import Pin from './Pin';

const WalletSettings = () => {
    const tabs = ["Bank Details", "PIN"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const displayTabContent = () => {
        switch (activeTab) {
          case "Bank Details":
            return (
              <BankDetails/>
              
            );
    
          case "PIN":
            return (
              <Pin  />
            );
    
          default:
            return null;
        }
      };
  return (
    <View style={{backgroundColor:"#FAFDFF", height:"100%"  }}>
      <BackNavigation pageTitle={"Wallet Settings"} url={"#"} />
      <TabSwitch
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
      />

      {displayTabContent()}


    </View>
  )
}

export default WalletSettings



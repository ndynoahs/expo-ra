import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import TabSwitch from '../client/tabs/Tabs';
import Messages from './Messages';
import Support from './Support';
import Fqas from './Fqas';
import { useState } from 'react';


const ChatScreen = () => {
  const tabs = ["Messages", "Support", "FQAS    "];
  const [activeTab, setActiveTab] = useState(tabs[0]);


  const displayTabContent = () => {
    switch (activeTab) {
      case "Messages":
        return (
          <Messages/>
        );

      case "Support":
        return (
          <Support  />
        );

      case "FQAS    ":
        return (
          <Fqas />
        );

      default:
        return null;
    }
  };

  

  return(
    <View style={{ backgroundColor:"#FAFDFF", height:"100%", }}>
      <TabSwitch
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
       <ScrollView showsVerticalScrollIndicator={false} >
        {displayTabContent()}
      </ScrollView>
    </View>
  )
};

export default ChatScreen



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 11,
    marginTop: 5,
  },
});

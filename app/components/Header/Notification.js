import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import BackNavigation from '../general/BackNavigation';
import { FontAwesome } from '@expo/vector-icons';

const Notification = () => {
    const NotifactionItem = ({title, subText, iconName})=> {
        return (
            <View style={styles.itemBox}>
            <MaterialIcons name={iconName} size={34} color="black" />
            <View style={styles.subText}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemDetails}>{subText}</Text>
            </View>
            <View style={styles.itemIcons}>
                <View style={{width:10, height:10, backgroundColor:"#0086FE", borderRadius:"360%",}}></View>
                <FontAwesome name="angle-right" size={24} color="black" />
            </View>
        </View>
        )
    }
  return (
    <View style={styles.container}>
        <BackNavigation pageTitle={"Notification"}/>
        <View style={styles.mainBox}>
            <Text style={styles.date}>Today</Text>
           
            <NotifactionItem  
                title="New updates available" 
                subText="Klinvas moabile app has an update."
                iconName="security-update"
            />
              <NotifactionItem  
                title="Verify email" 
                subText="Open the mail sent to your email to verify your account."
                iconName="email"
            />
        </View>

        <View style={styles.mainBox}>
            <Text style={styles.date}>Yesterday</Text>
            <NotifactionItem  
                title="Be careful!" 
                subText="Be careful so thieves don't steal your money"
                iconName="security"

                />
                
                

        </View>
        <View style={styles.mainBox}>
            <Text style={styles.date}>12 Feb 24</Text>
            <NotifactionItem  
                title="Your password is easy" 
                subText="It is dangerous to have an easy password"
                iconName="lock-person"
            />
        </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FAFDFF",
        height:"100%"
    },
    mainBox:{
        padding:10
    },
    date:{
        fontSize: 15,
        fontWeight:"600",
    },
    itemBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:20
    },
    subText:{
        width:"75%"
    },
    itemTitle:{
        fontWeight:"600",
        fontSize:16,
        paddingBottom:10
    },
    itemDetails:{
        fontSize:15,
        paddingBottom:10
    },
    itemIcons:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"10%"
    }
})
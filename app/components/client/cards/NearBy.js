import React from 'react'
import { Image, View, StyleSheet, Text, Pressable } from 'react-native'
import AwaitingCard from '../cards/AwaitingCard'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const NearBy = ({name, ratings, imagePath}) => {
  const navigation = useNavigation()

  return (
    <View style={styles.card}>
      <View style={{flexDirection:"row", justifyContent:"space-evenly", padding:5,gap:20, }}> 
        <Image
            style={styles.profileImage}
            source={imagePath}                
        />
             
        <View style={{ }}>
            <Text style={{fontWeight:600, fontSize:17,}}>{name}</Text>
            <View style={{flexDirection:"row", gap:5, paddingVertical:10 }}>
                <AntDesign name="checkcircleo" size={15} color="#147efb" />
                 <Text style={{fontWeight:"bold", fontSize:14, color:"#147efb"}}>2.02km</Text>
            </View>       
            <View style={{flexDirection:"row", gap:5 }}>
                <FontAwesome name="star" size={15} color="gold" />
                <FontAwesome name="star" size={15} color="gold" />
                <FontAwesome name="star" size={15} color="gold" />
                <FontAwesome name="star" size={15} color="gold" />
                <FontAwesome name="star" size={15} color="gold" />
                <Text  style={{fontSize:14}}>{ratings}</Text>
            </View>
        </View>
      </View>

    
        <Pressable  onPress={() => navigation.navigate('cleanerProfile')}  style={{flexDirection:"row",justifyContent:"center", width:"full", paddingVertical:10, paddingHorizontal:20,marginTop:10, borderRadius:10,}}>
            <Text style={{fontWeight:"500", fontSize:12,color:"#147efb"}}>View Profile</Text>
        </Pressable>  
    </View>
  )
}

export default NearBy

const styles = StyleSheet.create({
    card: {
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical:15,
        paddingVertical:10,
        paddingHorizontal:20,
        width:"100%",
    },
    profileImage:{
        width:70,
        height: 70,
        borderRadius: 50,
        marginRight: 10,
    },

    buttonText:{
        textAlign:"center",fontWeight:"bold",fontSize:14,color:"white"
    },

  
      
})

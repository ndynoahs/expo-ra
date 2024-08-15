import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ServiceBox = ({name, value, changeValue, label}) => {
  const handleIncrease = ()=> {
      changeValue(value + 1, name )
  }
  const handleReduce = ()=> {
    if(value > 0){
      changeValue(value - 1, name )
    }    
  }

  return (
    <View style={styles.card}>
      <View style={styles.serviceBox}> 
        <Text>{label}</Text>
        <View style={styles.serviceItems} >
          <FontAwesome name="minus" size={15} color="" style={styles.icons} onPress={handleReduce} />
          <TextInput
              value={`${value}`}
              style={styles.textInput}
          />
          <FontAwesome5 name="plus" size={15} color="" style={styles.icons} onPress={handleIncrease} />
        </View>
      </View>
    </View>
  )
}

export default ServiceBox


const styles= StyleSheet.create({
  card: {
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
    paddingVertical:2,
    paddingHorizontal:10,
    marginVertical:7,
    width:"100%", 
  },
    serviceBox:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
    serviceItems:{
      flexDirection:"row",
      alignItems:"center",
    },
    icons:{
      backgroundColor:"#0086FE",
      color:"white",
      padding:8,
      height:30,
      borderRadius:2,
      overflow: "hidden"
    },
    serviceIcons:{
      backgroundColor:"#0086FE",
      color:"white",
      padding:8,
      borderRadius:10,
      overflow: "hidden"
  
    },
    textInput:{
      marginVertical: 10,
      width: 50,
      textAlign:"center",
      backgroundColor:"#C8E2FA",
      paddingVertical:6,
      fontSize:16,
      fontWeight:"500"
    }
  })
  
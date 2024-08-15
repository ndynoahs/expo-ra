import React from 'react'
import { useState } from 'react';
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const BankDetails =  ()=> {
    const [bankName,setBankName] = useState("Access Bank");
    const [accountNo,setAccountNo] = useState("01229344");

 

    return(
    <KeyboardAvoidingView style={{ alignItems:"center"}}>
        <View style={{ marginTop: 20, width:"95%" }}>
            <Text style={styles.header}>Bank Details</Text>
            <Text style={styles.text}>Please ensure the full name on your account matches the name on your KlinVas profile</Text>

            <View style={styles.inputBox}>
                <TextInput
                value={bankName}
                onChangeText={(text) => setEmail(text)}
                style={{ marginVertical: 10, width: 300 }}
                placeholder="enter your Email"
                placeholderTextColor="gray" 
                />
            </View>

            <Text style={styles.label}> New Password</Text>
            <View style={styles.inputBox}>
                <TextInput
                value={accountNo}
                keyboardType="phone-pad"
                // onChangeText={handlePhoneNumberChange}
                // onChangeText={(text) => setPassword(text)}
                style={{ marginVertical: 10, width: 300 }}
                placeholder="enter your password"
                placeholderTextColor="gray" 

                />
            </View>                                
        </View>
        <Text style={styles.userName}> Giovani Ahmed</Text>
        <Pressable
            // onPress={signUpWithEmail}
            style={styles.button}
        >
            <Text style={{textAlign:"center",fontSize:16,color:"white"}}>Save Details</Text>
        </Pressable>

    </KeyboardAvoidingView>
    )
  }

export default BankDetails

const styles= StyleSheet.create({
    header:{
        fontWeight:"700",
        fontSize:19
    },
    text:{
        fontSize:14,
        marginVertical:15
    },
    inputBox:{
        // alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal:10,
        borderRadius: 10,
        borderWidth:0.6,
        borderBlockColor:"gray",
        marginBottom:30,
        marginTop:5,
        backgroundColor:"white"
    },
    label:{
        color:"#878787"
    },
    userName:{
        fontWeight:"600"
    },
    button:{
              // width: 380,
        backgroundColor: "#0086FE",
        borderRadius: 40,
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: 15,
        paddingHorizontal:100,
        marginTop:10
    }
})


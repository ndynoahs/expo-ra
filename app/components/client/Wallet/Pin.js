import React from 'react'
import { useState } from 'react';
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const Pin =  ()=> {
    const [bankName,setBankName] = useState("1");
    const [accountNo,setAccountNo] = useState("01229344");

 

    return(
    <KeyboardAvoidingView style={{ alignItems:"center"}}>
        <View style={{ marginTop: 20, width:"95%" }}>
            <Text style={styles.header}>Change Transaction PIN</Text>
            <Text style={styles.text}>Please use a PIN you can remember. It is better to use a PIN not associated with your birthday or mobile number.</Text>

            <Text style={styles.label}> Choose a Pin</Text>
            <View style={styles.inputBox}>
                <TextInput
                    value={bankName}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}                   
                />
                  <TextInput
                    value={bankName}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}                   
                />
                <TextInput
                    value={bankName}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}                   
                />
                <TextInput
                    value={bankName}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}                   
                />
            </View>

            <Text style={styles.label}> Confirm Pin</Text>

            <View style={styles.inputBox}>
                <TextInput
                    value={bankName}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}                   
                />
                  <TextInput
                    value={bankName}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}                   
                />
                <TextInput
                    value={bankName}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}                   
                />
                <TextInput
                    value={bankName}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}                   
                />
            </View>

            <Pressable
                // onPress={signUpWithEmail}
                style={styles.button}
            >
                <Text style={{textAlign:"center",fontSize:16,color:"white"}}>Set PIN</Text>
            </Pressable>

                               
        </View>
   
    </KeyboardAvoidingView>
    )
  }

export default Pin

const styles= StyleSheet.create({
    header:{
        fontWeight:"700",
        fontSize:19
    },
    text:{
        fontSize:14,
        marginVertical:15
    },
    label:{
        color:"black",
        fontSize:16,
        marginTop:20,
    },
    inputBox:{
        flexDirection:"row",
        justifyContent:"center",
        gap:10
        // alignItems: "center",
        // paddingVertical: 5,
        // paddingHorizontal:10,
        // borderRadius: 10,
        // borderWidth:0.6,
        // borderBlockColor:"gray",
        // marginBottom:30,
        // marginTop:5,
        // backgroundColor:"white"
    },
    textInput:{
        textAlign:"center",
        fontSize:40, 
        marginVertical: 10, 
        width: "20%",
        height:50, 
        borderWidth:1,
        borderBlockColor:"gray", 
        borderRadius:10,
        color:"gray",
        backgroundColor:"#FFFBFB"
    },
  
   
    button:{
              // width: 380,
        backgroundColor: "#0086FE",
        borderRadius: 40,
        marginLeft: "auto",
        marginRight: "auto",
        paddingVertical: 15,
        paddingHorizontal:50,
        marginTop:40
    }
})


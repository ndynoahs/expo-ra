import React from 'react'
import { useState } from 'react';
import BackNavigation from '../../general/BackNavigation';
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'


const CashOut = () => {
    const [bankName,setBankName] = useState("Access Bank");
    const [accountNo,setAccountNo] = useState("*****6789");
    const [amount,setAmount] = useState("");




  return (
    <View style={styles.container}>
      <BackNavigation pageTitle={"Wallet Settings"} url={"#"} />
      <KeyboardAvoidingView style={{ alignItems:"center"}}>
        <View style={{ marginTop: 20, width:"95%", padding:5 }}>
            <Text style={styles.balanceText}>Balance</Text>
            <Text style={styles.balanceText}>(NGN) 20,700.12</Text>

            <View style={styles.inputBox}>
                <TextInput
                value={bankName}
                onChangeText={(text) => setEmail(text)}
                style={{ marginVertical: 10, width: 300 }}
                placeholder="enter your Email"
                placeholderTextColor="gray" 

                />
            </View>

            <Text style={styles.label}> Account Number</Text>
            <View style={styles.inputBox}>
                <TextInput
                value={accountNo}
                keyboardType="phone-pad"
                style={{ marginVertical: 10, width: 300 }}
                placeholder="enter your password"
                placeholderTextColor="gray" 
                />
            </View>    

            <Text style={styles.label}> Enter Amount (NGN)</Text>
            <View style={styles.inputBox}>
                <TextInput
                value={amount}
                keyboardType="phone-pad"
                style={{ marginVertical: 10, width: 300 }}
                placeholderTextColor="gray" 
                />
            </View>                                                            
        </View>
        <Pressable
            // onPress={signUpWithEmail}
            style={styles.button}
        >
            <Text style={{textAlign:"center",fontSize:16,color:"white"}}>Cash Out</Text>
        </Pressable>

    </KeyboardAvoidingView>




    </View>
  )
}

export default CashOut

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FAFDFF",
        height:"100%",
      },
    inputBox:{
        // alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal:10,
        borderRadius: 10,
        borderWidth:0.6,
        borderBlockColor:"gray",
        marginBottom:15,
        marginTop:5,
        backgroundColor:"white"
    },
    label:{
        color:"black"
    },
    balanceText:{
        fontWeight:"500",
        textAlign:"right",
        paddingBottom:5
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



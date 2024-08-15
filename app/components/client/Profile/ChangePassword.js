import React, {useState} from 'react'
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import BackNavigation from '../../general/BackNavigation';
const ChangePassword = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (value) => {
      // Basic validation to allow only numbers and a maximum length of 10 digits
      const formattedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
      setPhoneNumber(formattedValue);
    };

    const InputBox = ({value, setEmail,placeholder, label})=> {
        return(
            <View>
                <Text>{label}</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={value}
                    onChangeText={(text)=>setEmail(text)}
                    style={{ color: "gray", marginVertical: 10, width: 300 }}
                    placeholder={placeholder}
                    />
                </View>

            </View>


        )
    }
  return (
    <View style={{backgroundColor:"#FAFDFF",}}>
      <BackNavigation pageTitle={"Change Password"} url={"#"} />
      <KeyboardAvoidingView style={{ alignItems:"center"}}>
            <ScrollView style={{ marginTop: 20, width:"95%" }}>
                {/* <InputBox value={email} setEmail={setEmail} placeholder={"enter your Email"} label={"Full Name"} /> */}

                <Text style={styles.label}> Old Password</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={{ color: "gray", marginVertical: 10, width: 300 }}
                    placeholder="enter your Email"
                    placeholderTextColor="gray" 

                    />
                </View>
      
                <Text style={styles.label}> New Password</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={email}
                    keyboardType="phone-pad"
                    onChangeText={handlePhoneNumberChange}
                    // onChangeText={(text) => setPassword(text)}
                    style={{ color: "gray", marginVertical: 10, width: 300 }}
                    placeholder="enter your password"
                    placeholderTextColor="gray" 

                    />
                </View>    

                 <Text style={styles.label}> Confirm Password</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={email}
                    keyboardType="phone-pad"
                    onChangeText={handlePhoneNumberChange}
                    // onChangeText={(text) => setPassword(text)}
                    style={{ color: "gray", marginVertical: 10, width: 300 }}
                    placeholder="enter your password"
                    placeholderTextColor="gray" 

                    />
                </View>                        
            </ScrollView>

        

            <Pressable
        // onPress={signUpWithEmail}
          style={{
            width: 380,
            backgroundColor: "#0086FE",
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
            paddingVertical: 15,
            marginTop:10
          }}
        >
          <Text style={{textAlign:"center",fontSize:16,color:"white"}}>Save Changes</Text>
        </Pressable>

        </KeyboardAvoidingView>


    </View>
  )
}

export default ChangePassword

const styles= StyleSheet.create({
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
    }
})

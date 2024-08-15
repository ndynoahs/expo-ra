import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View ,Button, } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import BackNavigation from '../../general/BackNavigation';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../firebaseConfig';
import PhoneInput  
    from 'react-native-phone-input'; 
import CountryPicker  
    from 'react-native-country-picker-modal'; 
import { doc, updateDoc } from "firebase/firestore";
import {  updateProfile } from "firebase/auth";
import { useSelector } from 'react-redux';


const EditProfile = () => {

    const user = useSelector((state) => state.user.user);
    // const User = FIREBASE_AUTH.currentUser;
    // console.log("user 1644", user)
    // const [user, setUser] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [countryCode, setCountryCode] = useState(''); 
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryPickerVisible, setCountryPickerVisible] =  
        useState(false); 
  
    const onSelectCountry = (country) => { 
        setCountryCode(country.cca2); 
        setSelectedCountry(country); 
        setCountryPickerVisible(false); 
    }; 

    // useEffect(() => {
    //     const currentUser = FIREBASE_AUTH.currentUser;
    
    //     if (currentUser) {
    //       const userId = currentUser.uid;
    //       // Fetch the user document from Firestore
    //       FIREBASE_DB.collection('users').doc(userId).get()
    //         .then((doc) => {
    //           if (doc.exists) {
    //             // Update the local user state with the user document data
    //             setUser(doc.data());
    //           } else {
    //             console.log("User document does not exist");
    //           }
    //         })
    //         .catch((error) => {
    //           console.error("Error fetching user document:", error);
    //         });
    //     }
    //   }, []);

    // console.log(phoneNumber, countryCode, selectedCountry?.callingCode)
    const onSubmit = () => { 
      
        // Perform your desired action with 
        // the phone number and country code 
        Alert.alert('Form Submitted', 
            `Phone Number: ${phoneNumber} 
                    \nCountry Code: ${countryCode}`); 
    }; 
  
    const toggleCountryPicker = () => { 
        setCountryPickerVisible(!countryPickerVisible); 
    }; 
  
    const initialState = {
        name: user.fullName ,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address:user?.address,
        country:user?.country,
        state:user?.state
    }
    const [inputs, setInputs] = useState(initialState);

    const handleTextChange = (text, name) => {
        console.log(text, name)
        setInputs(prevState=> ({...prevState, [name]:text}))
    }
    const handlePhoneNumberChange = (value) => {
      // Basic validation to allow only numbers and a maximum length of 10 digits
      const formattedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
      setPhoneNumber(formattedValue);
    };

    const saveChanges = async () => {

        const updateData = doc(FIREBASE_DB, "users", user.uid);

        // Set the "capital" field of the city 'DC'
        try{
        await updateDoc(updateData, {
            ...inputs,
            country: selectedCountry
        });

        await updateProfile( user, {
            ...inputs,
            country: selectedCountry
          });
        alert("Update Sucessfull")
        }catch(error){
            alert(`Sign in failed` + error.message)
        }
        
    }

    const InputBox = ({value,name, handleTextChange,placeholder, label})=> {
        return(
            <View>
                <Text>{label}</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={value}
                    onChangeText={(text) => handleTextChange(text, name)}
                    // onChangeText={onChangeText}
                    style={{ color: "gray", marginVertical: 10, width: 300 }}
                    placeholder={placeholder}
                    />
                </View>

            </View>


        )
    }
  return (
    <View style={{backgroundColor:"#FAFDFF", height:"100%"}}>
        <BackNavigation pageTitle={"Profile"}/>

        {/* <KeyboardAvoidingView style={{flex: 1, alignItems:"center"}} behavior="padding" enabled={true}> */}
        <KeyboardAvoidingView style={{ alignItems:"center"}} behavior="padding" enabled={true}>

            <ScrollView style={{ marginTop: 20, width:"95%" }} showsVerticalScrollIndicator={false}>
                {/* <InputBox 
                    value={inputs.name} 
                    name="name"
                    handleTextChange={handleTextChange}     
                    placeholder="enter your name" 
                    label={"Full Name"} 
                    placeholderTextColor="gray" 
                /> */}

                <Text style={styles.label}> Full Name</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={inputs.name}
                    onChangeText={(text) => handleTextChange(text, "name")}
                    style={{ color: "#6A6A6A", paddingVertical: 10, width: 300 }}
                    placeholder="enter your name"
                    // placeholderTextColor="black" 
                    />
                </View>

                <Text style={styles.label}> Email</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={inputs.email}
                    onChangeText={(text) => handleTextChange(text, "email")}
                    style={{ color: "#6A6A6A", marginVertical: 10, width: 300 }}
                    placeholder="enter your password"
                    // placeholderTextColor="gray" 

                    />
                </View>

                <Text style={styles.label}> Phone Number</Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}> 
                    <PhoneInput 
                    value={phoneNumber} 
                    onChangePhoneNumber={(number) => setPhoneNumber(number)} 
                    onPressFlag={toggleCountryPicker} 
                    style={styles.countryCode} 
                    /> 
                     <TextInput
                    value={inputs.phoneNumber}
                    keyboardType="phone-pad"
                    onChangeText={handlePhoneNumberChange}
                    style={styles.phoneInput}
                    placeholder="enter number"
                    />
                   

                </View>
               
                {/* <Button 
                    title= 
                    {selectedCountry ? selectedCountry.name : 'Select Country'} 
                    onPress={toggleCountryPicker} 
                    style={styles.countryButton} 
                />  */}
                <Text style={styles.label}> Country</Text>
                    <Pressable style={styles.countryButton} onPress={toggleCountryPicker}>
                        <Text style={{color: "#6A6A6A",}}>{selectedCountry ? selectedCountry.name : 'Select Country'}</Text>
                        <AntDesign name="down" size={20} color="black" />
                    </Pressable>
                {countryPickerVisible && ( 
                    <CountryPicker 
                        withFilter={true} 
                        withFlagButton={false} 
                        withCountryNameButton={false} 
                        onSelect={onSelectCountry} 
                        onClose={() => setCountryPickerVisible(false)} 
                        visible={countryPickerVisible} 
                        containerButtonStyle={styles.countryPickerButton} 
                        closeButtonImageStyle={styles.countryPickerCloseButton} 
                    /> 
                )} 
           

                <Text style={styles.label}> State</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={inputs.state}
                    // keyboardType="phone-pad"
                    onChangeText={(text) => handleTextChange(text, "state")}
                    style={{ color: "#6A6A6A", marginVertical: 10, width: 300 }}
                    placeholder="enter your state"
                    />
                </View>
                <Text style={styles.label}> Address</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={inputs.address}
                    onChangeText={(text) => handleTextChange(text, "address")}
                    style={{ color: "#6A6A6A", marginVertical: 10, width: 300 }}
                    placeholder="Enter your address"
                    // placeholderTextColor="gray" 

                    />
                </View>
{/*                 
                <Text style={styles.label}>Nearest Bustop</Text>
                <View style={styles.inputBox}>
                    <TextInput
                    value={email}
                    keyboardType="phone-pad"
                    onChangeText={handlePhoneNumberChange}
                    style={{ color: "gray", marginVertical: 10, width: 300 }}
                    placeholder="enter your password"
                    placeholderTextColor="gray" 

                    />
                </View> */}

{/* 
                <Pressable
                    style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginTop:15,
                        gap:4
                    }}
                >
                <Entypo name="squared-plus" size={24} color="#147efb" />
                <Text style={{textDecorationLine:"underline", color:"gray"}}>add another address</Text>
                </Pressable> */}
            </ScrollView>

        

        <Pressable
            onPress={saveChanges}
            style={{
                width: "95%",
                height:50,
                backgroundColor: "#0086FE",
                borderRadius: 15,
                marginLeft: "auto",
                marginRight: "auto",
                // paddingVertical: 10,
                justifyContent:"center",
                marginVertical:15
            }}
        >
          <Text style={{textAlign:"center",fontSize:16,color:"white"}}>Save Changes</Text>
        </Pressable>

        </KeyboardAvoidingView>


    </View>
  )
}

export default EditProfile

const styles= StyleSheet.create({
    inputBox:{
        // alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal:10,
        borderRadius: 15,
        borderWidth:1,
        borderColor:"#D2D2D2",
        marginBottom:15,
        marginTop:2,
        backgroundColor:"gary",
        height: 50, 

    },
    label:{
        color:"#737474",
        fontSize:14,
        fontWeight:"600",
        paddingBottom:1,
    },
    countryCode:{
        height: 50, 
        width: '30%', 
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius:10,
        marginBottom: 20, 
        paddingHorizontal: 10, 
        paddingVertical: 5,

    }, 
    phoneInput: { 
        width: '65%', 
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius:10,
        marginBottom: 20, 
        paddingHorizontal: 10, 
    }, 
    countryButton: { 
        flexDirection:"row",
        paddingVertical: 5,
        paddingHorizontal:15,
        justifyContent:"space-between",
        alignItems:"center",
        height: 50, 
        borderRadius: 15,
        borderWidth:1,
        borderColor:"#D2D2D2",
        marginBottom:15,
        marginTop:2,
        backgroundColor:"gary"
    }, 
    countryPickerButton: { 
        borderRadius: 5, 
        backgroundColor: '#fff', 
        marginBottom: 20, 
    }, 
    countryPickerCloseButton: { 
        width: 20, 
        height: 20, 
    }, 
})

import React, {useState} from 'react'
import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import BackNavigation from '../../general/BackNavigation';

const Reviews = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (value) => {
      // Basic validation to allow only numbers and a maximum length of 10 digits
      const formattedValue = value.replace(/[^0-9]/g, '').slice(0, 10);
      setPhoneNumber(formattedValue);
    };

    const ReviewCard = ({})=> {
        return(

        <View style={styles.reviewCard}>
            <View style={{flexDirection:"row",alignItems:"center", gap:10}}>
                <Image
                style={styles.profileImage}
                source={require( "../../../assets/images/profile_img_2.png")}                
                />
                <View style={{width:300}}>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        
                    <Text style={styles.profileName}>Jinny Oslin</Text>
                    <View style={styles.ratings}>
                        <Ionicons name="star" size={14} color="" style={styles.ratingIcon} />
                        <Ionicons name="star" size={14} color="" style={styles.ratingIcon} />
                        <Ionicons name="star" size={14} color="" style={styles.ratingIcon} />
                        <Ionicons name="star" size={14} color="" style={styles.ratingIcon} />
                        <Ionicons name="star" size={14} color="" style={styles.ratingIcon} />
                    </View>
                    </View>


                    <Text style={styles.date}>A month ago</Text>

                </View>
            </View>
            <Text style={styles.reviewText}>I highly recommend Dianne for any deep cleaning needs, he truly is an expert in his field.</Text>
        </View>


        )
    }

  return (
    <View style={{backgroundColor:"#FAFDFF",height:"100%"}}>
        <BackNavigation pageTitle={"Profile"}/>

       <ScrollView>

        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />

        </ScrollView>
    </View>
  )
}

export default Reviews

const styles= StyleSheet.create({
    reviewCard:{
        // paddingHorizontal:15,
        // paddingVertical:15
        paddingVertical:20,
        borderBottomWidth:0.2,
        borderBottomColor:"gray"
    },
    profileImage:{
        width:50,
        height: 50,
        borderRadius: 50,
    },
    profileName:{
        fontWeight:"500",
        fontSize:16,
    },
    date:{
        fontSize:12,
        paddingTop:5
    },
    ratings:{
        flexDirection:"row",
        justifyContent:"center",
        gap:5,
    },
    ratingIcon:{
        color:"#00CCE7",
    },
    reviewText:{
        color:"#878787",
        paddingTop:10
    },
   
})

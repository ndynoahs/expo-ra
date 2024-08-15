import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import BackNavigation from '../../general/BackNavigation'
import { ScrollView } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Reviews from '../Profile/Reviews';
import ReviewCard from '../cards/ReviewCard';


const CleanerProfile = () => {
  return (
    <View style={{width:"100%", backgroundColor:"#FAFDFF", height:"100%"}}>
        <BackNavigation pageTitle={"Cleaners Profile"}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topBox}>
            <View style={{width:"40%"}}>
              <Image
                style={styles.profileImage}
                source={require( "../../../assets/images/profile_img_2.png")}                
              />
            </View>
            <View styles={{}}>
              <Text style={styles.userName}> Denver Akin</Text>
              <View style={{flexDirection:"row", gap:15, paddingVertical:10}}>
                <Text style={styles.text_md_Primary}> 2+ Yrs</Text>
                <Text style={styles.text_md_Primary}> 1.03 km</Text>
              </View>
              <View style={{flexDirection:"row", paddingVertical:10}}>
                <AntDesign name="checkcircleo" size={20} color="#147efb" />
                <Text style={styles.text_sm}> 3 Jobs in progress</Text>
              </View>
              <View style={{flexDirection:"row", justifyContent:"space-between",gap:5, width:"62%"}}>
                <View style={styles.ratingBox}>
                  <Text style={styles.text_xs}> Rating</Text>
                  <Text style={styles.text_sm}> 127</Text>
                  <View style={styles.ratings}>
                    <Ionicons name="star" size={12} color="" style={styles.ratingIcon} />
                    <Ionicons name="star" size={12} color="" style={styles.ratingIcon} />
                    <Ionicons name="star" size={12} color="" style={styles.ratingIcon} />
                    <Ionicons name="star" size={12} color="" style={styles.ratingIcon} />
                    <Ionicons name="star" size={12} color="" style={styles.ratingIcon} />
                  </View>
                </View>
                <View style={styles.ratingBox}>
                  <Text style={styles.text_xs}> Jobs</Text>
                  <Text style={styles.text_sm}> 152</Text>
                  <AntDesign name="folder1" size={20} color="#147efb" />
                </View>
              </View>
              
            </View>
          </View>
          <View style={{padding:15, paddingBottom:30}}>
            <Text style={styles.userName}> Bio</Text>
            <Text style={{fontSize:15,lineHeight:22, paddingVertical:10}}>Denver Akin is a skilled and experienced male cleaner. He has extensive knowledge in maintaining building for personal and commercial use.</Text>
            <View style={{flexDirection:"row",alignContent:"center", justifyContent:"space-between"}}>
              <View style={styles.optionsBox}>
                <AntDesign name="check" size={16} color="black" />
                <Text style={styles.optionsBoxText}>Car Wash</Text>
              </View>
              <View style={styles.optionsBox}>
                <AntDesign name="check" size={16} color="black" />
                <Text style={styles.optionsBoxText}>Move In </Text>
              </View>
              <View style={styles.optionsBox}>
                <AntDesign name="check" size={16} color="black" />
                <Text style={styles.optionsBoxText}>Clothes</Text>
              </View>
          </View>
            

          </View>
          <View style={{paddingVertical:20,padding:10, backgroundColor:"#ebf5ff"}}>
            <Text style={styles.userName}> Reviews</Text>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </View>


        </ScrollView>
    </View>
  )
}

export default CleanerProfile

const styles = StyleSheet.create({
  topBox:{
    flexDirection:"row",
    width:"100%",
    padding:10,
    gap:10
  },
  profileImage:{
    width:"100%",
    height: 180,
    borderRadius: 10,
  },
  userName:{
    fontSize:20,
    fontWeight:"600"
  },
  detailsBox:{
    width:"90%"
  },
  rowBox:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:5

  },
  ratingBox:{
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:15,
    paddingVertical:10,
    backgroundColor:"#ebf5ff",
    borderRadius:10,
    // marginHorizontal:5,
    width:"60%",
  },  
  ratings:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:10,
    gap:5
  },
  ratingIcon:{
    color:"#00CCE7",
},
  text_lg:{
    fontSize:20
  },
  text_md_Primary:{
    fontSize:16,
    fontWeight:"700",
    color:"#147efb"
  },
  text_sm:{
    fontSize:16,
    fontWeight:"600"
  },
  text_xs:{
    fontSize:14
  },
  optionsBox:{
    flexDirection:"row", 
    gap:5,
    paddingHorizontal:9,
    paddingVertical:5, 
    borderWidth:0.9, 
    borderRadius:10, 
    borderColor:"#147efb", 
    backgroundColor:"#ebf5ff",
  },
  optionsBoxText:{
    fontSize:12,
    fontWeight:"500"
  }
})
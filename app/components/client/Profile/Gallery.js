import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import BackNavigation from '../../general/BackNavigation';
import { Entypo } from '@expo/vector-icons';

const Gallery = () => {
  return (
    <View style={styles.container}>
        <BackNavigation pageTitle={"Gallery"}/>
        <View style={styles.imageRow}>
            <Image
            style={styles.image}
            source={require("../../../assets/images/woman-cleaning-2.jpg") }
            />
            <Image
            style={styles.image}
            source={require("../../../assets/images/woman-cleaning-2.jpg") }
            />
                <Image
            style={styles.image}
            source={require("../../../assets/images/woman-cleaning-2.jpg") }
            />
            <Image
            style={styles.image}
            source={require("../../../assets/images/woman-cleaning-2.jpg") }
            />
            <View style={styles.addImage}>
            <Entypo name="squared-plus" size={29} color="#147efb" />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap:"wrap",
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop:20
  },
  image: {
    width: 165,
    height: 150,
    resizeMode: 'cover',
    // borderRadius: 10,
    margin: 5,
    marginBottom:30
  },
  addImage:{
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderBlockColor:"blue",
    // borderRadius: 5,
    width: 165,
    height: 150,
  }
});

export default Gallery;

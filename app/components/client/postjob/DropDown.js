// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// // import { Icon } from 'react-native-elements';
// import { Octicons } from '@expo/vector-icons';

// const Dropdown = ({ label }) => {
//   const [visible, setVisible] = useState(false);

//   const toggleDropdown = () => {
//     setVisible(!visible);
//   };

//   const renderDropdown = () => {
//     if (visible) {
//       return (
//           <Text style={styles.dropdown}>
//             This is where the dropdown will be rendered.
//           </Text>
//       );
//     }
//   };

//   return (
//     <TouchableOpacity
//       style={styles.button}
//       onPress={toggleDropdown}
//     >
//       {renderDropdown()}
//       <Text style={styles.buttonText}>{label}</Text>
//       <Octicons name="triangle-down" size={24} color="black" />
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:"center",
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     gap:15,
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     padding:10,
//     marginVertical:7,
//     width:"100%",
//   },

//   buttonText: {
//     textAlign: 'center',
//   },
//   dropdown: {
//     position: 'absolute',
//     backgroundColor: '#fff',
//     top: 50,
//   },
// });

// export default Dropdown;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const Dropdown = ({ options, onSelect, selectedValue, defaultValue }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.button}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Text>{selectedValue ? selectedValue : defaultValue}</Text>
        <Octicons name="triangle-down" size={24} color="black" />
      </TouchableOpacity>
      {/* {!modalVisible &&
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelect(option)}>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      } */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.optionsBox}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              width: "95%",
              borderRadius: 10,
              paddingVertical: 15,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              onPress={() => setModalVisible(false)}
            >
              <Text
                style={{ fontWeight: "600", paddingVertical: 10 }}
                disable={false}
              >
                {defaultValue}
              </Text>
              <Octicons name="triangle-up" size={24} color="black" />
            </TouchableOpacity>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelect(option)}
                style={styles.options}
              >
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    gap: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 7,
    paddingVertical: 15,
    width: "100%",
  },

  buttonText: {
    textAlign: "center",
  },
  options: {
    borderTopWidth: 0.4,
    paddingVertical: 10,
    width: "100%",
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    top: 50,
  },
  optionsBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    // top:80
  },
});

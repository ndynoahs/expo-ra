import React from "react";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../firebaseConfig";

const BottomModal = ({ jobId, isVisible, onClose, handleCancel }) => {
  const [counterValue, setCounterValue] = useState();
  const [selectedValue, setSelectedValue] = useState();

  // const handleCancel = async (jobId) => {
  //   try {
  //     const user = currentUser;

  //     if (!user) {
  //       throw new Error("User is not authenticated");
  //     }

  //     const jobRef = doc(FIREBASE_DB, "jobs", jobId);
  //     await updateDoc(jobRef, {
  //       canceled: true,
  //     });

  //     console.log(`Job ${jobId} has been successfully canceled.`);
  //   } catch (error) {
  //     console.error("Error canceling job: ", error);
  //   }
  // };

  const Radio = ({ content, option }) => {
    return (
      <View style={styles.radioButton}>
        <RadioButton.Android
          value={option}
          status={selectedValue === option ? "checked" : "unchecked"}
          onPress={() => setSelectedValue(option)}
          color="#007BFF"
        />
        <Text style={styles.radioLabel}>{content}</Text>
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={[styles.overlay]}></View>
      <View style={styles.optionsBox}>
        <TouchableOpacity
          onPress={onClose}
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingTop: 20,
            width: "95%",
          }}
        >
          <Text style={{ color: "#0086FE", fontSize: 16, fontWeight: "600" }}>
            Close
          </Text>
          {/* <MaterialIcons name="cancel" size={29} color="#646464" /> */}
        </TouchableOpacity>
        <View
          style={{
            // alignItems: "center",
            justifyContent: "center",
            height: "80%",
            width: "100%",
            borderRadius: 50,
          }}
        >
          {/* <Text style={{ fontSize: 24, fontWeight: "600", color: "#0086FE" }}>
            Cancel Job
          </Text> */}
          <View
            style={{
              marginVertical: 20,
              width: "100%",
              borderRadius: 10,
              paddingVertical: 15,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#646464",
                textAlign: "center",
              }}
            >
              Why are you canceling ?
            </Text>
          </View>

          <Radio content="Taking too long" option={"Taking too long"} />
          <Radio content="Can't afford it" option={"Can't afford it"} />
          <Radio content="Changed my mind" option={"Changed my mind"} />
          <Radio content="Worker was too rude" option={"Worker was too rude"} />
          <Radio content="Other" option={"Other"} />

          {/* {selectedValue === "Other" && (
            <TextInput
              value={counterValue}
              onChangeText={(text) => setCounterValue(text)}
              style={{
                fontSize: 16,
                textAlign: "center",
                paddingVertical: 10,
                marginVertical: 10,
                borderRadius: 10,
                borderColor: "#6E6E6E",
                borderWidth: 0.4,
                width: "100%",
              }}
              placeholder="Tell us why"
              placeholderTextColor="#6E6E6E"
            />
          )} */}

          <Pressable
            onPress={() => handleCancel(jobId)}
            style={{
              width: "100%",
              backgroundColor: `${selectedValue ? "#0086FE" : "#D0E2EC"}`,
              borderRadius: 10,
              marginLeft: "auto",
              marginRight: "auto",
              paddingVertical: 15,
              marginTop: 25,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}>
              Cancel Job
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  optionsBox: {
    // flex: 1, justifyContent: 'center', alignItems: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    height: "60%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", //
  },

  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});

import React from "react";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SuccessModal = ({ jobId, isVisible, onClose, handleCancel }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={[styles.overlay]}></View>
      <View style={styles.optionsBox}>
        <View
          style={{
            flex: 1,
            gap: 20,
            // justifyContent: "center",
            marginTop: 60,
            alignItems: "center",
          }}
        >
          {/* <Image
            style={{ height: 120, resizeMode: "contain", paddingVertical: 30 }}
            source={require("../../../assets/icons/success-icon.png")}
          /> */}
          <Ionicons name="checkmark-done-circle" size={94} color="white" />
          <Text
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              paddingVertical: 10,
              fontFamily: "Sedan",
            }}
          >
            Done!
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              fontFamily: "Sedan",
            }}
          >
            Job Posted Successfully.
          </Text>
        </View>
        <View style={{ width: "100%", justifyContent: "flex-end" }}>
          <Pressable
            onPress={onClose}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 5,
              marginLeft: "auto",
              marginRight: "auto",
              paddingVertical: 15,
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "#0086FE",
                fontWeight: 900,
                fontFamily: "RobotoBold",
              }}
            >
              Okay
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  optionsBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#0086FE",
    paddingVertical: 60,
    paddingHorizontal: 10,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", //
  },
});

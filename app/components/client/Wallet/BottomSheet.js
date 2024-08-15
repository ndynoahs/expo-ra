import React from "react";
import { useState } from "react";
import {
  Pressable,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const BottomSheet = ({ isVisible, onClose }) => {
  const [bankName, setBankName] = useState("Access Bank");
  const [accountNo, setAccountNo] = useState("*****6789");
  const [amount, setAmount] = useState("");

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={[styles.overlay]}></View>
      <View style={styles.optionsBox}>
        <KeyboardAvoidingView style={{ alignItems: "center" }}>
          <View
            style={{
              marginTop: 20,
              width: "95%",
              padding: 5,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              onPress={onClose}
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingTop: 10,
                paddingBottom: 30,
                width: "95%",
              }}
            >
              <Text
                style={{ color: "#0086FE", fontSize: 16, fontWeight: "600" }}
              >
                Close
              </Text>
            </TouchableOpacity>
            {/* <Text style={styles.balanceText}>Balance</Text>
            <Text style={styles.balanceText}>(NGN) 20,700.12</Text> */}

            <Text style={styles.label}> Bank Name</Text>

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
            <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}>
              Cash Out
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};
export default BottomSheet;

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

  inputBox: {
    // alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.6,
    borderBlockColor: "gray",
    marginBottom: 15,
    marginTop: 10,
    backgroundColor: "white",
  },
  label: {
    color: "black",
  },
  balanceText: {
    fontWeight: "500",
    textAlign: "right",
    paddingBottom: 5,
  },
  button: {
    // width: 380,
    backgroundColor: "#0086FE",
    borderRadius: 40,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginTop: 10,
  },
});

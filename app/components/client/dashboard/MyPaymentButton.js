import React from "react";
import { Button, View, Text } from "react-native";
import Paystack from "react-native-paystack-webview";

const MyPaymentButton = ({ amount, email }) => {
  const paystackRef = React.createRef();

  const handlePayPress = async () => {
    try {
      const publicKey = "pk_test_76dc9e50d0d1c9218cbe170a06027f4df7558e7f";
      await paystackRef.current.charge({
        amount: 4000 * 100,
        email: "ndynoags@gmail.com",
        publicKey,
        text: "Pay Now",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Pay Now" onPress={handlePayPress} />
      <Paystack ref={paystackRef} />
    </View>
  );
};

export default MyPaymentButton;

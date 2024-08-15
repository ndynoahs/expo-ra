import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../../Header";
import { Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import BottomSheet from "./BottomSheet";

const WalletDash = () => {
  const [secureText, setSecureText] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const [loaded] = useFonts({
    Sedan: require("../../../assets/fonts/Sedan-Regular.ttf"),
    Platypi: require("../../../assets/fonts/Platypi-VariableFont_wght.ttf"),
    Roboto: require("../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoBold: require("../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  const navigation = useNavigation();
  // Sample data for transaction history
  const transactions = [
    {
      id: 1,
      name: "Giovani Ahmed",
      amount: -50,
      type: "Booking",
      date: "2024-02-18",
    },
    {
      id: 2,
      name: "Bank Transfer",
      amount: +100,
      type: "Top Up",
      date: "2024-02-17",
    },
    {
      id: 3,
      name: "Bank Transfer",
      amount: -20,
      type: "Cashout",
      date: "2024-02-16",
    },
    // Add more transaction data as needed
  ];

  const handleSecureText = () => {
    setSecureText((prev) => !prev);
  };

  const toggleBottomSheet = () => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <View style={styles.container}>
      {/* <Header  /> */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Wallet</Text>
        <View style={styles.how}>
          <Text style={styles.howText}>See how it works</Text>
          <Entypo name="info-with-circle" size={20} color="black" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
        <View style={styles.balanceContainer}>
          <View style={styles.balanceTopMenu}>
            <View style={styles.balanceTitle}>
              <Text style={styles.balanceLabel}>Balance</Text>
              <Ionicons
                name={(secureText && "eye-sharp") || "eye-off-sharp"}
                size={24}
                color="white"
                onPress={handleSecureText}
              />
            </View>
            <Ionicons
              name="settings-sharp"
              size={24}
              color="white"
              onPress={() => navigation.navigate("WalletSettings")}
            />
          </View>

          <Text style={styles.balanceAmount}>
            {(secureText && "******") || "N23,650.00"}
          </Text>

          {/* <Text style={styles.cashBack}>
            You have a cashback of N3,050.00, which can be used on your next
            booking.
          </Text> */}

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleBottomSheet}>
              <Text style={styles.buttonText}>Cash Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionHeader}>Transaction History</Text>
          <View style={styles.transactionList}>
            {transactions.map((transaction) => (
              <View key={transaction.id} style={styles.transactionItem}>
                <View style={styles.profileItems}>
                  <Image
                    style={styles.profileImage}
                    source={require("../../../assets/images/profile_img_2.png")}
                  />
                  <View>
                    <Text style={styles.transactionName}>
                      {transaction.name}
                    </Text>
                    <Text style={styles.transactionDate}>
                      {transaction.date}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.transactionAmount}>
                    {transaction.amount}
                  </Text>
                  <Text style={styles.transactionType}>{transaction.type}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <BottomSheet
        isVisible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
      />
    </View>
  );
};

export default WalletDash;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    // fontFamily: 'Platypi'
  },
  how: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#EBF5FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  howText: {
    fontSize: 14,
    fontWeight: "800",
    fontFamily: "Platypi",
  },

  container: {
    flex: 1,
    backgroundColor: "#FAFDFF",
    height: "100%",
    paddingTop: 30,
    // padding: 8,
  },
  balanceContainer: {
    marginVertical: 20,
    backgroundColor: "#147efb",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  balanceTopMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceTitle: {
    flexDirection: "row",
    gap: 10,
  },
  balanceLabel: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "800",
    color: "white",
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 20,
    color: "white",
    fontFamily: "RobotoBold",
  },
  cashBack: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    paddingVertical: 20,
    fontFamily: "Platypi",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#003B70",
    fontFamily: "RobotoBold",
  },

  transactionContainer: {
    flex: 1,
  },
  transactionHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 30,
    fontFamily: "RobotoBold",
  },
  profileItems: {
    flexDirection: "row",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  transactionList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    paddingVertical: 20,
  },
  transactionName: {
    fontWeight: "700",
    fontSize: 16,
    // fontFamily:"RobotoBold"
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "700",
  },
  transactionType: {
    fontSize: 12,
    paddingTop: 20,
  },
  transactionDate: {
    fontSize: 12,
    paddingTop: 20,
  },
});

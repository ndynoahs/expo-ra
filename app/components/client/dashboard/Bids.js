import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from "react-native";
import BidsCard from "../cards/BidsCard";
import AwaitingCard from "../cards/AwaitingCard";
import BackNavigation from "../../general/BackNavigation";
import { FIREBASE_DB } from "../../../firebaseConfig";
import { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { acceptBid, fetchSelectedJob } from "../../../lib/jobs";
import { useDispatch, useSelector } from "react-redux";
import BidsJobDetailsCard from "../cards/BidsJobDetailsCard";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import BackNavRounded from "../../general/BackNavRounded";
import AntDesign from "@expo/vector-icons/AntDesign";
import happyFace from "../../../assets/icons/happy-face-blue.png";

const Bids = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { jobId } = route.params;
  const [loading, setLoading] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [bids, setBids] = useState([]);
  const [selectedBid, setSelectedBid] = useState({});
  const [bidAmount, setBidAmount] = useState(0.0);
  const jobData = useSelector((state) => state.jobs.selectedJob);
  const { userId, email } = useSelector((state) => state.user.user);

  useEffect(() => {
    fetchSelectedJob(jobId, dispatch, setLoading);
    // hasUserBiddedForJob(jobId, dispatch);
  }, []);

  const handleAccept = async () => {
    // setIsBottomSheetVisible(false);
    try {
      if (jobData.status == "active") {
        alert("Bid accepted and job awarded successfully");
        await acceptBid(jobId, selectedBid.id, selectedBid, selectedBid.amount);
      } else {
        console.log("This Job is not active");
        alert("This Job is not active");
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDecline = () => {
    alert("Payment Unsuccessfull");
  };

  const handleCancelPayment = () => {};
  const handleCounterBid = async () => {
    setIsBottomSheetVisible(false);
    try {
      if (isAccept) {
        await acceptBid(jobId, selectedBid.id);
      } else {
        alert("your bid has been sent successfully");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBidsForJob = async (jobId) => {
    setLoading(true);
    try {
      const q = query(
        collection(FIREBASE_DB, "bids"),
        where("jobId", "==", jobId)
      );
      const querySnapshot = await getDocs(q);
      const bids = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(bids, "bids");
      setBids(bids || {});

      return bids;
    } catch (error) {
      console.error("Error fetching bids: ", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBidsForJob(jobId);
  }, []);

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [counterValue, setCounterValue] = useState();
  const toggleBottomSheet = (action, amount, bid) => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
    setBidAmount(amount);
    setSelectedBid(bid);
    action === "accept" ? setIsAccept(true) : setIsAccept(false);
  };

  const paystackRef = React.createRef();
  const handleChargeCard = async () => {
    const publicKey = "pk_test_76dc9e50d0d1c9218cbe170a06027f4df7558e7f";
    await paystackRef.current.charge({
      amount: 5000 * 100,
      email: "ndynoahs@gmail.com",
      publicKey,
      text: "Pay Now",
    });
  };
  <Paystack ref={paystackRef} />;

  const Pay = () => {
    const paystackWebViewRef = useRef(paystackProps.PayStackRef);
    console.log(paystackWebViewRef, "paystackWebViewRef");

    // const paystackWebViewRef = React.createRef();

    const callbackUrl = "https://standard.paystack.co/close"; // Cancels WebView on close

    return (
      <View style={{ flex: 1, width: "100%" }}>
        <Paystack
          paystackKey="pk_test_76dc9e50d0d1c9218cbe170a06027f4df7558e7f"
          billingEmail="paystackwebview@something.com"
          amount={25000.0}
          onCancel={(e) => {
            callbackUrl;
            console.log(e, "onCancel");
            // handle response here
            // paystackWebViewRef.current.startTransaction
            // default: nill
            // paystackWebViewRef.current.startTransaction(null)
            // alert("Payment is ")
          }}
          onSuccess={(res) => {
            // handle response here
            handleAccept();
          }}
          onDecline={(res) => {
            handleDecline();
          }}
          ref={paystackWebViewRef}
        />

        <TouchableOpacity
          onPress={() => paystackWebViewRef.current.startTransaction()}
          style={{
            width: "100%",
            backgroundColor: "#0086FE",
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
            paddingVertical: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ alignSelf: "center", color: "white" }}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const BottomSheet = ({ isVisible, isAccept, amount, onClose, onPress }) => {
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
          </TouchableOpacity>
          {!isAccept && (
            <View style={styles.alertBox}>
              <Text style={{}}> You can only counter once per job</Text>
            </View>
          )}

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "80%",
              width: "100%",
              borderRadius: 50,
              marginTop: 40,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "600", color: "#0086FE" }}>
              {isAccept ? "Accept Offer" : "Counter Offer"}
            </Text>

            {isAccept ? (
              <Text
                style={{ paddingVertical: 20, fontSize: 16, fontWeight: "600" }}
              >
                You are about to accept this offer for N{amount}
              </Text>
            ) : (
              <View
                style={{
                  marginVertical: 20,
                  width: "100%",
                  backgroundColor: "#E3E3E3",
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
                  N 12,500
                </Text>
              </View>
            )}
            {!isAccept && (
              <TextInput
                value={counterValue}
                onChangeText={(text) => setCounterValue(text)}
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  paddingVertical: 15,
                  marginVertical: 10,
                  borderRadius: 10,
                  borderColor: "#6E6E6E",
                  borderWidth: 0.4,
                  width: "100%",
                }}
                placeholder="Enter your counter offer"
                placeholderTextColor="#6E6E6E"
              />
            )}
            {/* <Pressable
              onPress={handleAccept}
              style={{
                width: "100%",
                backgroundColor: "#0086FE",
                borderRadius: 10,
                marginLeft: "auto",
                marginRight: "auto",
                paddingVertical: 15,
                marginTop: 25,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "white" }}
              >
                {isAccept ? "Continue to payment" : "Submit Offer"}
              </Text>
            </Pressable> */}
            {/* <Button
              title="Pay Now"
              onPress={() => navigation.navigate("myPaymentButton")}
            /> */}

            <Pay amount={amount} />
            {/* 
            <Pressable
              onPress={handleAccept}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                backgroundColor: "#0086FE",
                borderRadius: 10,
                marginLeft: "auto",
                marginRight: "auto",
                paddingVertical: 15,
                alignItems: "center",
              }}
            >
              <Ionicons name="cash-outline" size={24} color="white" />
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "white" }}
              >
                Pay with cash
              </Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View
      style={{ backgroundColor: "#FAFDFF", height: "100%", padding: 2 }}
      showsVerticalScrollIndicator={false}
    >
      <BackNavRounded />

      {loading ? (
        <View style={styles.loading}>
          <Text stylele={styles.loadingText}> Loading</Text>
        </View>
      ) : (
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              {/* <AwaitingCard data={jobData} isBidPage={true} /> */}
              <BidsJobDetailsCard
                data={jobData}
                jobId={jobId}
                isBidPage={true}
              />
              {bids?.map((bid) => (
                <BidsCard
                  key={bid.id}
                  bid={bid}
                  toggleBottomSheet={toggleBottomSheet}
                  name="Micheal"
                  amount={bid.amount}
                  time={30}
                  imagePath={require("../../../assets/images/profile_img_2.png")}
                />
              ))}

              {bids.length < 1 && (
                <View style={styles.noBidsBox}>
                  <Image
                    style={styles.image}
                    source={require("../../../assets/icons/happy-face-blue.png")}
                  />
                  <Text style={styles.text}> No bids available</Text>
                  <Text style={styles.noBidsText}>
                    {" "}
                    There are no bids for this job yet. Please wait so cleaners
                    are send in their offers, and choose your best bid.
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      )}
      <BottomSheet
        isVisible={isBottomSheetVisible}
        isAccept={isAccept}
        amount={bidAmount}
        onClose={() => setIsBottomSheetVisible(false)}
        onPress={handleChargeCard}
      />
    </View>
  );
};

export default Bids;

const styles = StyleSheet.create({
  alertBox: {
    backgroundColor: "orange",
    width: "100%",
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 10,
  },
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
    height: "50%",
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
  noBidsBox: {
    marginTop: 80,
    alignItems: "center",
    width: "80%",
  },
  text: {
    color: "black",
    fontSize: 20,
    paddingVertical: 30,
    fontFamily: "Platypi",
  },
  noBidsText: {
    fontSize: 14,
    fontWeight: "800",
    fontFamily: "Platypi",
    textAlign: "center",
  },

  loading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});

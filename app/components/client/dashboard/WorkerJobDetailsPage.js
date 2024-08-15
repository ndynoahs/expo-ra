import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Platform,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackNavigation from "../../general/BackNavigation";
import BackNavRounded from "../../general/BackNavRounded";

import AdditionalServices from "../postjob/AdditionalServices";
import { Button, Dialog, Portal, PaperProvider } from "react-native-paper";
// import { doc, getDoc } from "firebase/firestore";
import Ionicons from "@expo/vector-icons/Ionicons";

import { FIREBASE_AUTH, FIREBASE_DB } from "../../../firebaseConfig";
import { useEffect } from "react";
import BottomModal from "../items/BottomModal";
import BudgetBox from "../postjob/BudgetBox";
import ClientProfileCard from "../cards/ClientProfileCard";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { hasUserBiddedForJob } from "../../../lib/jobs";
import { useSelector } from "react-redux";

import { query, doc, getDoc, getDocs, where } from "firebase/firestore";
import { handleStartJob, hasUserBiddedForJob } from "../../../lib/jobs";
import AlertBox from "../items/AlertBox";
import { set } from "firebase/database";
import CleanerInprogressCard from "../cards/CleanerInprogressCard";
import CustomButton from "../items/Button";
import { handleJobDone } from "../../../lib/workers";
import DialogModal from "../items/DialogModal";
import { StatusBar } from "expo-status-bar";

const WorkerJobDetailsPage = ({ route, navigation }) => {
  const currentUser = FIREBASE_AUTH.currentUser;
  const { jobId, otherParam } = route.params;
  const [jobData, setJobData] = useState({});
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({ budget: 1000, message: "" });
  const [previousBid, setPreviousBid] = useState(null);
  const [jobPoster, setJobPoster] = useState({});
  const [alertMessage, setAlertMessage] = useState(null);
  const { userId } = useSelector((state) => state.user.user);
  const awardedTo = jobData?.awardedTo;

  console.log(jobData, "jobData");

  const isAwarded = awardedTo === userId;
  console.log(isAwarded, "userId");

  const [modalVisible, setModalVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    if (isAwarded && !jobData.jobDone) {
      setAlertMessage("Congrats! This job has been awarded to you!");
    } else if (jobData.jobDone && jobData.status == "inprogress") {
      setAlertMessage("Job Done! Waiting for aproval");
    } else if (jobData.status == "completed") {
      setAlertMessage("Job Completed Succesfully");
    }
  });

  const handleModal = () => setShowModal((prev) => !prev);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const docRef = doc(FIREBASE_DB, "users", jobData.createdBy);
      const docSnap = await getDoc(docRef);
      setJobPoster(docSnap.data());
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    } finally {
      setLoading(true);
    }
  };
  const fetchSingleJob = async () => {
    setLoading(true);
    try {
      const docRef = doc(FIREBASE_DB, "jobs", jobId);
      const docSnap = await getDoc(docRef);
      setJobData(docSnap.data());
    } catch (error) {
      console.error("Error fetching jobs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleJob();
  }, []);
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    hasUserBiddedForJob(jobId, userId, setPreviousBid);
  }, []);
  const changeValue = (value, name) => {
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  function handlePlaceBid() {
    !input.budget ? alert("Please Enter your email") : placeBid();
  }
  const placeBid = async (jobId) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, "bids"), {
        jobId: jobId,
        cleanerId: currentUser.uid,
        amount: input.budget,
        message: input.message,
        status: "pending",
        updatedAt: serverTimestamp(), // Timestamp of when the job was created
        createdAt: serverTimestamp(), // Timestamp of when the job was created
      });
      console.log("Job posted successfully with ID: ", docRef.id);
      alert("Bid sent succesfully");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const ServiceBox = ({ text, number }) => {
    return (
      <View style={styles.serviceBox}>
        <Text>{text}</Text>
        <Text style={styles.serviceText}>{number}</Text>
      </View>
    );
  };

  return (
    <PaperProvider>
      <View style={{ backgroundColor: "#FAFDFF", height: "100%" }}>
        <BackNavigation pageTitle={"Job Details"} showModal={handleModal} />
        {/* <BackNavRounded /> */}
        {loading ? (
          <View style={styles.loading}>
            <Text stylele={styles.loadingText}> Loading</Text>
          </View>
        ) : (
          <>
            {/* {previousBid?.length >= 1 && <AlertBox message={alertMessage} />} */}
            {alertMessage && (
              <AlertBox message={alertMessage} isCompleted={true} />
            )}

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ justifyContent: "center", padding: 8 }}>
                {!isAwarded && (
                  <ClientProfileCard
                    name={jobPoster.name || jobPoster.fullName}
                    ratings={"5.0(14 reviews)"}
                    imagePath={require("../../../assets/images/elizu.jpg")}
                  />
                )}
                {isAwarded && (
                  <CleanerInprogressCard
                    jobId={jobId}
                    data={jobData}
                    forTab={false}
                    setLoading={setLoading}
                  />
                )}
                <ServiceBox text={"Bedroom"} number={jobData.bedRoom} />
                <ServiceBox text={"Bathrrom"} number={jobData.bathRoom} />
                <ServiceBox text={"LivingRoom"} number={jobData.livingRoom} />
                <View style={styles.card}>
                  <Text style={styles.text}>{jobData.address}</Text>
                </View>
                <AdditionalServices
                  checked={true}
                  createJob={false}
                  data={jobData.additionalServices}
                />
                <View style={styles.card}>
                  <Text style={styles.text}> N{jobData.budget}</Text>
                </View>
                {/* <Text style={{ fontWeight: 500, padding: 5, marginTop: 15 }}>
                Additional Note
              </Text> */}
                {jobData.note && (
                  <View style={styles.textBox}>
                    <Text>{jobData.note}</Text>
                  </View>
                )}
                {/* <Pressable style={styles.card}>
                  <Text style={styles.text}> Chat Empoyer</Text>
                  <Ionicons name="send" size={24} color="#0086FE" />
                </Pressable> */}

                {/* {isAwarded && ( */}
                {/* <BudgetBox budget={input?.budget} changeValue={changeValue} /> */}
                {/* )} */}
                {jobData.status === "active" && (
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Message"
                    value={input.message}
                    onChangeText={(text) => changeValue(text, "message")}
                    style={styles.message}
                  />
                )}
              </View>

              <BudgetBox budget={input?.budget} changeValue={changeValue} />

              {/* {jobData.status === "active" && (
                <Pressable
                  onPress={() => placeBid(jobId)}
                  style={{
                    width: "95%",
                    backgroundColor: "#0086FE",
                    borderColor: `${"#0086FE"}`,
                    borderWidth: 0.7,
                    borderRadius: 10,
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingVertical: 15,
                    marginTop: 1,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: "white",
                    }}
                  >
                    Send bid
                  </Text>
                </Pressable>
              )} */}
            </ScrollView>
            {jobData.status === "active" && (
              <>
                <CustomButton
                  text={" Send bid"}
                  isTrue={jobData.jobDone}
                  onClick={() => placeBid(jobId)}
                  bgOutline={true}
                  loading={loading}
                />
              </>
            )}

            {jobData.status === "inprogress" && !jobData.jobDone && (
              <CustomButton
                text={"Mark as Done"}
                isTrue={jobData.jobDone}
                onClick={() => handleJobDone(jobId, setLoading)}
                bgOutline={true}
                loading={loading}
              />
            )}
          </>
        )}
        {/* <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable> */}
      </View>
      {/* <DialogModal visible={true} /> */}
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "light"} /> */}
    </PaperProvider>
  );
};

export default WorkerJobDetailsPage;

const styles = StyleSheet.create({
  button: {
    width: 300,
    // backgroundColor: "#147efb",
    borderRadius: 50,
    borderWidth: 0.6,
    borderBlockColor: "gray",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginTop: 70,
  },
  address: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    fontWeight: "600",
  },
  text: {
    fontWeight: "600",
  },
  textBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
    height: 80,
  },

  card: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 15,
    paddingVertical: 10,
    width: "100%",
  },

  serviceBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#D2D2D2",
    padding: 10,
    marginVertical: 5,
  },

  serviceText: {
    backgroundColor: "#C8E2FA",
    padding: 7,
    width: "15%",
    textAlign: "center",
  },

  message: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 90,
    width: "100%",
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
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", //
    zIndex: 30,
  },
});

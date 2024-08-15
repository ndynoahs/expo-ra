import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import InprogressCard from "../cards/InprogressCard";
import CompletedCard from "../cards/CompletedCard";
import { ScrollView } from "react-native-gesture-handler";
import BackNavigation from "../../general/BackNavigation";
import JobDetailsCard from "../cards/JobDetailsCard";
import AdditionalServices from "../postjob/AdditionalServices";
import { Button, Dialog, Portal, PaperProvider } from "react-native-paper";
import { doc, updateDoc, getDoc } from "firebase/firestore";

import { FIREBASE_AUTH, FIREBASE_DB } from "../../../firebaseConfig";
import { useEffect } from "react";
import BottomModal from "../items/BottomModal";
import { useSelector } from "react-redux";
import ClientJobDetailsCard from "../cards/ClientJobDetailsCard";
import CustomButton from "../items/Button";

const JobDetails = ({ route, navigation }) => {
  const currentUser = FIREBASE_AUTH.currentUser;
  const { jobId, otherParam } = route.params;
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [jobData, setJobData] = useState({});
  const { jobDone } = jobData;
  const [loading, setLoading] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const handleModal = () => setShowModal((prev) => !prev);

  // const jobDataa = useSelector((state) => state.jobs.selectedJob);

  console.log(jobData, jobId, "jobDataa");

  const isUser = (id) => {
    return currentUser.uid == id ? true : false;
  };

  const postedByUser = isUser(jobData.createdBy);

  const fetchSelectedJob = async () => {
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
    fetchSelectedJob();
  }, []);

  const handleCancel = async (jobId) => {
    try {
      const user = currentUser;

      if (!user) {
        throw new Error("User is not authenticated");
      }

      const jobRef = doc(FIREBASE_DB, "jobs", jobId);
      await updateDoc(jobRef, {
        canceled: true,
      });

      console.log(`Job ${jobId} has been successfully canceled.`);
    } catch (error) {
      console.error("Error canceling job: ", error);
    } finally {
      // setShowModal(false);
      handleModal();
      alert("Job canceled succesfully");
    }
  };
  const handleCompleted = async (jobId) => {
    try {
      const user = currentUser;
      if (!user) {
        throw new Error("User is not authenticated");
      }
      const jobRef = doc(FIREBASE_DB, "jobs", jobId);
      await updateDoc(jobRef, {
        completed: true,
        status: "completed",
      });

      console.log(`Job ${jobId} has been completed successfully.`);
      alert("Job completed succesfully");
    } catch (error) {
      console.error("Error canceling job: ", error);
    } finally {
      hideDialog();
    }
  };

  const AlertBox = ({ message, isGreen }) => {
    return (
      <View style={styles.alertBox(isGreen)}>
        <Text style={styles.alertText(isGreen)}>{message}</Text>
      </View>
    );
  };

  return (
    <PaperProvider>
      <View
        style={{
          backgroundColor: "#FAFDFF",
          height: "100%",
          paddingBottom: 10,
        }}
      >
        <BackNavigation pageTitle={"Job Details"} showModal={handleModal} />

        {loading ? (
          <View style={styles.loading}>
            <Text stylele={styles.loadingText}> Loading</Text>
          </View>
        ) : (
          <View style={{ paddingBottom: 40 }}>
            {jobData.status == "awarded" && (
              <AlertBox message={"This Job has been awarded to a cleaner"} />
            )}
            {jobData.status == "inprogress" && !jobData.jobDone && (
              <AlertBox message="Your Job is in progress" />
            )}
            {jobData.jobDone && jobData.status == "inprogress" && (
              <AlertBox message="Cleaner has completed the job. Please confirm" />
            )}
            {jobData.jobDone && jobData.status == "completed" && (
              <AlertBox message="Job completed succesfully!" bgColor="green" />
            )}
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* {jobData.status == "awarded" && (
                <AlertBox message="This Job has been awarded to a cleaner" />
              )}
              {jobData.jobDone && (
                <AlertBox message="Cleaner has completed the job. Please confirm" />
              )} */}
              <View style={{ justifyContent: "center", padding: 8 }}>
                {postedByUser ? (
                  <ClientJobDetailsCard data={jobData} />
                ) : (
                  <JobDetailsCard data={jobData} />
                )}
                <View style={styles.card}>
                  <Text style={styles.text}>{jobData.address}</Text>
                </View>
                <AdditionalServices
                  checked={true}
                  createJob={false}
                  data={jobData.additionalServices}
                />
                {/* <View style={styles.card}>
                <Text style={styles.text}> Just Once</Text>
              </View> */}

                <Text style={{ fontWeight: 500, padding: 5, marginTop: 15 }}>
                  Additional Note
                </Text>

                <View style={styles.textBox}>
                  <Text>{jobData.note}</Text>
                </View>
              </View>

              {/* {postedByUser && jobData.status == "active" && (
              <Pressable
                onPress={() => navigation.navigate("PostJob", { jobId: jobId })}
                style={{
                  width: "95%",
                  backgroundColor: `${jobDone ? "#0086FE" : ""}`,
                  borderColor: `${"#0086FE"}`,
                  borderWidth: 0.7,
                  borderRadius: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingVertical: 15,
                  marginTop: 25,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: "#0086FE",
                  }}
                >
                  Edit Job
                </Text>
              </Pressable>
            )} */}
              {postedByUser && jobData.status == "active" && (
                <CustomButton
                  text={"Edit Job "}
                  isTrue={jobData.jobDone}
                  onClick={() =>
                    navigation.navigate("PostJob", { jobId: jobId })
                  }
                  bgOutline={true}
                />
              )}
              {/* {postedByUser && (
              <Pressable
                onPress={handleModal}
                style={{
                  width: "95%",
                  backgroundColor: `${jobDone ? "#0086FE" : ""}`,
                  borderColor: `${jobDone ? "#0086FE" : "red"}`,
                  borderWidth: 0.7,
                  borderRadius: 8,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingVertical: 15,
                  marginTop: 25,
                  marginBottom: 70,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    color: `${jobData.jobDone ? "white" : "red"}`,
                  }}
                >
                  {jobData.jobDone ? "Mark as Completed" : "Cancel Job"}
                </Text>
              </Pressable>
            )} */}

              {jobData.jobDone && jobData.status == "inprogress" && (
                <CustomButton
                  text={"Mark as Completed"}
                  isTrue={jobData.jobDone}
                  onClick={showDialog}
                  bgOutline={true}
                />
              )}
              {!jobData.jobdone && jobData.status == "inprogress" && (
                <CustomButton
                  text={"Cancel Job"}
                  isTrue={!jobData.jobDone}
                  onClick={handleModal}
                  bgOutline={false}
                />
              )}
            </ScrollView>
          </View>
        )}
      </View>

      <Portal style={{ justifyContent: "center" }}>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{
            justifyContent: "center",
            alignContent: "center",
            width: "92%",
            height: "35%",
            marginLeft: 15,
            zIndex: 10,
            backgroundColor: "white",
          }}
        >
          <Dialog.Title
            style={{
              fontSize: 22,
              textAlign: "center",
              fontWeight: "500",
              paddingVertical: 20,
            }}
          >
            Confirm Job{" "}
          </Dialog.Title>

          <Dialog.Content>
            <Text
              variant="bodyMedium"
              style={{
                fontSize: 14,
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              This job has been completed to my satisfaction
            </Text>
          </Dialog.Content>
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              // marginLeft: 0,
            }}
          >
            <Dialog.Actions>
              <Button onPress={hideDialog}>No</Button>
            </Dialog.Actions>
            <Dialog.Actions>
              <Button onPress={() => handleCompleted(jobId)}>Yes</Button>
            </Dialog.Actions>
          </View>
        </Dialog>
      </Portal>

      {showModal && (
        <BottomModal
          onClose={handleModal}
          jobId={jobId}
          handleCancel={() => handleCancel(jobId)}
        />
      )}
    </PaperProvider>
  );
};

export default JobDetails;

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
  alertBox: (isGreen) => ({
    backgroundColor: isGreen ? "green" : "orange",
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
  }),
  alertText: (isGreen) => ({
    color: isGreen ? "white" : "",
    // fontSize: 15,
    // lineHeight: 20,
    fontWeight: "500",
    textAlign: "center",
    width: "90%",
  }),

  textBox: {
    // justifyContent:"center",
    // alignItems:"center",
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

  // alertBox: {
  //   backgroundColor: "green",
  //   width: "100%",
  //   paddingVertical: 15,
  //   alignItems: "center",
  // },

  card: {
    flexDirection: "column",
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

  loading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
  },
});

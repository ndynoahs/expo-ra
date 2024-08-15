import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ServiceBox from "./ServiceBox";
import AdditionalServices from "./AdditionalServices";
import Dropdown from "./DropDown";
import Header from "../../Header";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import Feather from "@expo/vector-icons/Feather";

import { fetchSingleJob } from "../../../lib/jobs";
import BudgetBox from "./BudgetBox";
import CustomButton from "../items/Button";
import SuccessModal from "../items/SuccessModal";

const PostJob = ({ route, navigation }) => {
  const currentUser = FIREBASE_AUTH.currentUser;
  const [editJobDetails, setEditJobDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInputs] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
    // navigation.navigate("tabScreen", { jobId: jobId });
    navigation.goBack();
  };

  /* FOR JOB EDIT PAGE */
  const { jobId, otherParam } = route?.params || {};
  // let jobIdState = jobId

  console.log(route?.params, "params");
  console.log(input);

  useEffect(() => {
    if (jobId) {
      // fetchJobDetails();
      // fetchSingleJob(jobId, setEditJobDetails, setIsEditing);

      const fetchSingleJob = async () => {
        setLoading(true);
        try {
          const docRef = doc(FIREBASE_DB, "jobs", jobId);
          const docSnap = await getDoc(docRef);
          console.log(docSnap.data(), "fetchSingleJob");
          setInputs(docSnap.data());
          setIsEditing(true);
        } catch (error) {
          console.error("Error fetching jobs:", error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchSingleJob();
    } else {
      setInputs(initialState);
    }
  }, [jobId]);

  useEffect(() => {
    input?.address && setError("");
  });
  function clearError() {
    setError("");
  }

  // setTimeout(clearError(), 5000);

  useEffect(() => {
    // Check if there's an error present (optional)
    if (error) {
      const timeoutId = setTimeout(clearError, 3000); // Delay of 5 seconds

      // Cleanup function to clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [error]); // Dependency array: Only run when error changes

  const options = [
    "Just once",
    "Once a week ",
    "Twice a month ",
    "Once a month",
  ];
  const addressOptions = [
    "43 Abiodun street Shomolu ",
    "22 Bensara street lagos",
    "12 Benson Avenue Ikorodu",
    "18 Police road Bariga ",
  ];

  const initialState = {
    bedRoom: 0,
    livingRoom: 0,
    bathRoom: 0,
    additionalServices: [
      { name: "Dishes", isChecked: false, isDone: false },
      { name: "car wash", isChecked: false, isDone: false },
      { name: "Inside Cabinets", isChecked: false, isDone: false },
      { name: "Inside Oven", isChecked: false, isDone: false },
      { name: "Wall Washing", isChecked: false, isDone: false },
    ],
    howManyTimes: "",
    address: "",
    budget: 1000,
    note: "",
    bids: 0,
  };

  const postJob = async () => {
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, "jobs"), {
        ...input,
        createdBy: currentUser.uid,
        createdAt: serverTimestamp(), // Timestamp of when the job was created
        status: "active",
        jobDone: false,
        canceled: false,
        completed: false,
      });

      // alert("posted succesfully");
      console.log("Job posted successfully with ID: ", docRef.id);
      setInputs(initialState);
      setShowModal((prev) => !prev);
    } catch (error) {
      alert(error.message);
    } finally {
      handleModal();
    }
  };

  const updateJobDetails = async (jobId, input) => {
    const jobRef = doc(FIREBASE_DB, "jobs", jobId);
    await updateDoc(jobRef, {
      ...input,
    });
    alert("Job Updated succesfully");
    navigation.setParams({ jobId: null, otherParam: null });
    setIsEditing(false);
    setInputs(initialState);
    navigation.navigate("jobDetails", { jobId: jobId });
  };

  const handleRebook = async (jobId, input) => {
    try {
      const jobRef = doc(FIREBASE_DB, "jobs", jobId);
      await updateDoc(jobRef, {
        ...input,
        createdAt: serverTimestamp(), // Timestamp of when the job was created
        status: "active",
        jobDone: false,
        canceled: false,
        completed: false,
        awardedTo: null,
        payment: null,
        awardedBid: null,
      });
    } catch {
      console.log(error.message);
    } finally {
      // alert("Job posted Successfully");
      // navigation.setParams({ jobId: null, otherParam: null });
      setIsEditing(false);
      setInputs(initialState);
      setShowModal((prev) => !prev);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateJobDetails(jobId, input);
    } else {
      input?.address
        ? postJob()
        : setError("Please enter an address")
        ? input?.address < 2000
        : setError("Please enter an amount greater than N2000");
    }
  };

  const handleCancelEditing = () => {
    navigation.setParams({ jobId: null, otherParam: null });
    setIsEditing(false);
    setInputs(initialState);
    navigation.goBack();
    console.log("canceledd");
    // navigation.navigate("jobDetails", { postId: jobId });
  };

  const changeValue = (text, name) => {
    setInputs((prevState) => ({ ...prevState, [name]: text }));
  };

  console.log(input, "input");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFDFF" }}>
      {/* <View style={{ backgroundColor: "#FAFDFF" }}> */}
      {/* <Header /> */}
      {error && (
        <View style={styles.alertBox}>
          <Feather name="alert-triangle" size={24} color="black" />
          <Text style={styles.alertText}>{error}</Text>
        </View>
      )}

      {loading ? (
        <View style={styles.loading}>
          <Text stylele={styles.loadingText}> Loading</Text>
        </View>
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <ServiceBox
            name="bedRoom"
            label="Bedroom"
            value={input?.bedRoom}
            changeValue={changeValue}
          />
          <ServiceBox
            name="bathRoom"
            label="Bathroom"
            value={input?.bathRoom}
            changeValue={changeValue}
          />
          <ServiceBox
            name="livingRoom"
            label="Livingroom"
            value={input?.livingRoom}
            changeValue={changeValue}
          />
          <AdditionalServices
            name="additionalServices"
            data={input?.additionalServices}
            createJob={true}
            setInputs={setInputs}
          />
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* <Dropdown
              options={options}
              onSelect={(option) => changeValue(option, "howManyTimes")}
              selectedValue={input?.howManyTimes}
              defaultValue={"How many Times "}
            /> */}
            <Dropdown
              options={addressOptions}
              onSelect={(option) => changeValue(option, "address")}
              selectedValue={input?.address}
              defaultValue={"Select Address"}
            />
          </View>
          <BudgetBox budget={input?.budget} changeValue={changeValue} />

          <Text style={{ fontWeight: 500, marginTop: 15 }}>
            {"Additional Note (Optional)"}
          </Text>
          <View style={styles.textBox}>
            <TextInput
              value={input?.note}
              onChangeText={(text) => changeValue(text, "note")}
              style={styles.textArea}
              multiline={true}
              numberOfLines={10}
              // placeholder="Enter Your Budget"
              placeholderTextColor="#606060"
            />
          </View>

          {/* {isEditing && (
            <Pressable
              onPress={handleCancelEditing}
              style={{
                width: "95%",
                backgroundColor: `${""}`,
                borderColor: `${"red"}`,
                borderWidth: 0.7,
                borderRadius: 8,
                marginLeft: "auto",
                marginRight: "auto",
                paddingVertical: 15,
                marginTop: 25,
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 16, color: "red" }}>
                {"Cancel Edditing"}
              </Text>
            </Pressable>
          )} */}

          {input?.status === "completed" && (
            <CustomButton
              text={"Book Again"}
              onClick={handleRebook}
              bgOutline={true}
            />
          )}
          {!input?.jobDone && (
            <Pressable
              onPress={handleSubmit}
              style={{
                width: "100%",
                backgroundColor: "#0086FE",
                borderRadius: 10,
                marginLeft: "auto",
                marginRight: "auto",
                paddingVertical: 15,
                marginTop: 25,
                marginBottom: 100,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 16, color: "white" }}
              >
                {isEditing ? "Update Request " : "Post Request"}
              </Text>
            </Pressable>
          )}

          {isEditing && (
            <CustomButton
              text={input.status === "completed" ? "Cancel" : "Cancel Edditing"}
              onClick={handleCancelEditing}
              bgOutline={false}
            />
          )}
        </ScrollView>
      )}
      {showModal && <SuccessModal onClose={handleModal} />}
    </SafeAreaView>
  );
};

export default PostJob;

const styles = StyleSheet.create({
  //error

  alertBox: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "orange",
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    gap: 10,
  },
  alertText: {
    // color: "white",
    fontWeight: "500",
  },
  container: {
    marginTop: 10,
    paddingHorizontal: 8,
    padding: 20,
  },
  card: {
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
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginVertical: 7,
    width: "100%",
  },
  textInput: {
    fontSize: 16,
    backgroundColor: "white",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textBox: {
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 5,
    paddingVertical: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textArea: {
    fontSize: 16,
    borderRadius: 10,
    textAlignVertical: "top",
    paddingHorizontal: 20,
    height: 70,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },

  budgetBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 22,
    paddingHorizontal: 10,
    marginVertical: 7,
    width: "100%",
  },
  budgetItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: "35%",
    backgroundColor: "#D2E2E7",
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  currency: {
    fontSize: 16,
    fontWeight: "500",
  },
  budgetInput: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "500",
  },

  iconText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  icons: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#0086FE",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  reduceButton: (budget) => ({
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: (budget === 1000 && "grey") || "#0086FE",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  }),

  btnText: (name, activeTab) => ({
    // fontFamily: "DMMedium",
    // fontSize: SIZES.small,
    // color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    color: name === activeTab ? "black" : "black",
    fontWeight: 600,
  }),

  //Loading styles

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

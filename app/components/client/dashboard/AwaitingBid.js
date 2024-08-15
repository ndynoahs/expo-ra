import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  FlatList,
  Text,
  Image,
} from "react-native";
import AwaitingCard from "../cards/AwaitingCard";
import NearBy from "../cards/NearBy";
import { useDispatch, useSelector } from "react-redux";
import { bidsPerJob, fetchBidCount, fetchJobs } from "../../../lib/jobs";
import WorkerNegotionCard from "../cards/WorkerNegotiationCard";
import JobsNearYouCard from "../cards/JobsNearYouCard";
import { useNavigation } from "@react-navigation/native";
import { getData } from "../../../utils/asyncStorage";

const AwaitingBid = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const jobs = useSelector((state) => state.jobs.jobs);
  const [loading, setLoading] = useState(false);
  const [showJobs, setShowJobs] = useState(true);
  const isClient = user?.userRole === "client" ? true : false;
  const navigation = useNavigation();

  useEffect(() => {
    fetchJobs(dispatch, setLoading);
  }, []);

  const loadState = () => {
    try {
      const serializedState = getData("todos");
      return serializedState ? JSON.parse(serializedState) : [];
    } catch (err) {
      console.error("Could not load state", err);
      return [];
    }
  };

  console.log(loadState(), "loadState");

  const userJobs = jobs.filter(
    (job) => job.createdBy === user?.userId && job.status === "active"
  );
  const workersJobs = jobs.filter(
    (job) => job.createdBy !== user?.userId && job.status === "active"
  );
  const jobsByRole = user?.userRole === "client" ? userJobs : workersJobs;

  const JobList = () => {
    return jobsByRole?.map((job) => (
      <AwaitingCard key={job?.id} data={job} user={user} />
    ));
  };

  function isEmpty(arr) {
    return arr.length === 0;
  }
  const items = [
    {
      id: "1",
      name: "Favour Ayoba",
      imagePath: require("../../../assets/images/profile_img_2.png"),
      ratings: "4.9 (7)",
    },
    {
      id: "2",
      name: "Funmi",
      imagePath: require("../../../assets/images/femalecleaner-1.webp"),
      ratings: "4.5 (20)",
    },
    {
      id: "3",
      name: "Ayomide",
      imagePath: require("../../../assets/images/elizu.jpg"),
      ratings: "4.2 (14)",
    },
    {
      id: "4",
      name: "Yisha",
      imagePath: "../../../assets/images/femalecleaner-1.webp",
      ratings: "4.6 (3)",
    },
  ];
  return (
    <View>
      {isClient ? (
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginTop: 20,
              borderRadius: 40,
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../../assets/icons/icons8-cleaner.png")}
            />
            <Text style={{ fontWeight: "600", fontSize: 16, color: "black" }}>
              Cleaners nearby
            </Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={items}
            key={items.id}
            ItemSeparatorComponent={() => (
              <View style={{ marginHorizontal: 10 }} />
            )}
            renderItem={({ item }) => (
              <View>
                <NearBy
                  name={item.name}
                  ratings={item.ratings}
                  imagePath={item.imagePath}
                />
              </View>
            )}
          />
          {!isEmpty(userJobs) && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#EBF5FF",
                paddingVertical: 15,
                paddingHorizontal: 10,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text
                  style={{ fontWeight: "600", fontSize: 16, color: "black" }}
                >
                  Your awaiting bids{" "}
                </Text>
                <Text
                  style={{ fontWeight: "600", fontSize: 16, color: "#737373" }}
                >
                  {userJobs.length}
                </Text>
              </View>
              <Pressable onPress={(prev) => setShowJobs((prev) => !prev)}>
                <Text
                  style={{ fontWeight: "600", fontSize: 14, color: "#147efb" }}
                >
                  {showJobs ? "Show all" : "Hide all"}
                </Text>
              </Pressable>
            </View>
          )}
          {showJobs && <JobList />}
        </View>
      ) : (
        <View style={{ padding: 10, marginTop: 0 }}>
          {/* <Text style={{ fontWeight: "700", fontSize: 14, color: "#83829A" }}>
            In Negotiation
          </Text> */}
          <WorkerNegotionCard
            //  toggleBottomSheet={toggleBottomSheet}
            name="Funmi"
            amount={9000}
            time={25}
            imagePath={require("../../../assets/images/femalecleaner-1.webp")}
          />
          {/* <WorkerNegotionCard
            name="Funmi"
            amount={9000}
            time={25}
            imagePath={require("../../../assets/images/femalecleaner-1.webp")}
          /> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginTop: 20,
              borderRadius: 40,
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../../assets/icons/icons8-cleaner.png")}
            />
            <Text style={{ fontWeight: "600", fontSize: 16, color: "black" }}>
              Job near you
            </Text>
          </View>
          {/* <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              color: "#83829A",
            }}
          >
            Job near you
          </Text> */}
          {workersJobs?.map((job) => (
            <View key={job?.id}>
              <JobsNearYouCard data={job} user={user} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default AwaitingBid;

const styles = StyleSheet.create({});

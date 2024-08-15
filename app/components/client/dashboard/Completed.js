import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import CompletedCard from "../cards/CompletedCard";
import { fetchWorker } from "../../../lib/user";
import NewCompletedCard from "../cards/NewCompletedCard";

const CompletedTab = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const user = useSelector((state) => state.user.user);

  console.log(user.userId, "currentuser");

  const clientCompleted = jobs.filter(
    (job) => job?.createdBy === user?.userId && job?.status === "completed"
  );
  const workerCompleted = jobs.filter(
    (job) => job?.awardedTo == user?.userId && job.status === "completed"
  );
  const jobsByRole =
    user?.userRole === "client" ? clientCompleted : workerCompleted;

  const JobList = () => {
    return jobsByRole?.map((job) => (
      <>
        {/* <CompletedCard
          key={job?.id}
          jobId={job.id}
          data={job}
          user={user}
          isClient={user?.userRole === "client" ? true : false}
        /> */}
        {user?.userRole === "client" ? (
          <NewCompletedCard
            jobId={job.id}
            data={job}
            isClient={true}
            route={"jobDetails"}
          />
        ) : (
          <NewCompletedCard
            jobId={job.id}
            data={job}
            isClient={false}
            route={"workerJobDetailsPage"}
          />
        )}
      </>
    ));
  };

  return (
    <View
      style={{
        justifyContent: "center",
        // alignItems: "center",
        paddingBottom: "100",
        padding: 10,
        paddingTop: 40,
      }}
    >
      <Text style={styles.date}>October 2023</Text>
      <JobList />
    </View>
  );
};

export default CompletedTab;

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
  date: {
    fontWeight: "600",
    paddingBottom: 10,
  },
});

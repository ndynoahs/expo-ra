import React from "react";
import { View, StyleSheet } from "react-native";
import InprogressCard from "../cards/InprogressCard";
import { useSelector } from "react-redux";
import CleanerInprogressCard from "../cards/CleanerInprogressCard";

const Inprogress = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const user = useSelector((state) => state.user.user);

  console.log(jobs.awardedTo, "awardedTo");

  const clientInprogress = jobs.filter(
    (job) =>
      (job.createdBy === user?.userId && job.status === "awarded") ||
      job.status === "inprogress"
  );
  const workersInprogress = jobs.filter(
    (job) =>
      (job.createdBy !== user?.userId && job.status === "awarded") ||
      job.status === "inprogress"
  );
  const jobsByRole =
    user?.userRole === "client" ? clientInprogress : workersInprogress;

  const JobList = () => {
    return jobsByRole?.map((job) => (
      <>
        {user?.userRole === "client" ? (
          <InprogressCard key={job?.id} jobId={job.id} data={job} user={user} />
        ) : (
          <CleanerInprogressCard
            key={job?.id}
            jobId={job.id}
            data={job}
            user={user}
            forTab={true}
          />
        )}
      </>
    ));
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "100",
        padding: 10,
      }}
    >
      <JobList />
    </View>
  );
};

export default Inprogress;

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
});

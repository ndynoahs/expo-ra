import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
const AdditionalServices = ({ createJob, data, setInputs }) => {
  const handleCheckboxChange = (index) => {
    const newAdditionalServices = data.map((item, idx) => {
      if (index === idx) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setInputs((prevState) => ({
      ...prevState,
      additionalServices: newAdditionalServices,
    }));
  };

  const checkedItem = data?.filter((item, index) => item.isChecked);

  console.log(checkedItem?.length);
  return (
    <View style={styles.card}>
      <View style={styles.serviceHeader(createJob)}>
        <FontAwesome5
          name="plus"
          size={10}
          color={createJob ? "" : "white"}
          style={styles.addIcon}
        />
        {createJob ? (
          <Text style={{ color: createJob ? "white" : "white" }}>
            Additional Services
          </Text>
        ) : (
          <Text style={{ color: "white", fontWeight: 700 }}>{"Extras"}</Text>
        )}
      </View>
      {(!createJob && (
        <View style={styles.selectContainer(checkedItem)}>
          {data?.map((item) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "40%",
              }}
              key={item.length}
            >
              {item.isChecked && (
                <>
                  <Checkbox
                    style={styles.checkbox}
                    color="#000000"
                    value={item.isChecked}
                  />

                  <Text>{item.name}</Text>
                </>
              )}
            </View>
          ))}
        </View>
      )) || (
        <View style={styles.selectContainer(checkedItem)}>
          {data?.map((item, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
              }}
              key={index}
            >
              <Checkbox
                style={styles.checkbox}
                value={item.isChecked}
                name={item.name}
                // onValueChange={toggleSelection(data, item.name)}
                onValueChange={() => handleCheckboxChange(index)}
              />
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default AdditionalServices;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 7,
    width: "100%",
  },
  box: {
    justifyContent: "space-between",
    borderWidth: 0.7,
    borderRadius: 10,
    borderBlockColor: "gray",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 7,
    height: 200,
  },
  serviceHeader: (serviceHeader) => ({
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: serviceHeader ? "" : "black",
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "30%",
  }),

  selectContainer: (checkedItem) => ({
    flexDirection: `${checkedItem?.length < 3 ? "column" : "row"}`,
    flexWrap: "wrap",
    flex: 2,
    paddingVertical: 10,
  }),

  checkbox: {
    margin: 8,
    color: "blue",
    borderColor: "#0086FE",
  },
});

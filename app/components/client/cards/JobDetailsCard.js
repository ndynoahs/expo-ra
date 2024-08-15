import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Checkbox from "expo-checkbox";

const JobDetailsCard = ({ data }) => {
  const user = useSelector((state) => state.user.user);
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => [setIsChecked((prev) => !prev)];

  console.log(data.bathRoom);

  const CustomCheckbox = ({ checked, onPress, size }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.customCheck(size, checked)}
      >
        {checked && <FontAwesome name="check" size={size - 10} color="white" />}
      </TouchableOpacity>
    );
  };
  const CompletedCheckbox = ({ checked, onPress, size }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.completedCheck(size, checked)}
      >
        {checked && <FontAwesome name="check" size={size - 10} color="white" />}
      </TouchableOpacity>
    );
  };
  const AwardedCheckbox = ({ checked, onPress, size, status }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.awardedCheck(size, checked, status)}
      >
        {checked && <FontAwesome name="check" size={size - 10} color="white" />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.profileImage}
            source={require("../../../assets/images/profile_img_2.png")}
          />
          <View style={{ justifyContent: "space-between" }}>
            <Text style={{ fontWeight: 600, fontSize: 17 }}>
              {user.fullName}
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome name="star" size={15} color="gold" />
              <Text style={{ fontSize: 16 }}>4.5(8)</Text>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <AntDesign name="checkcircleo" size={15} color="#147efb" />
            <Text
              style={{ fontWeight: "bold", fontSize: 17, color: "#147efb" }}
            >
              40mins
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            N {data.budget}
          </Text>
        </View>
      </View>
      <View style={styles.checkitems}>
        <AwardedCheckbox checked={true} status="awarded" size={25} />
        <View style={styles.line}></View>

        <CustomCheckbox
          checked={isChecked}
          onPress={toggleCheckbox}
          size={25}
        />
        <View style={styles.line}></View>
        <CustomCheckbox
          checked={isChecked}
          onPress={toggleCheckbox}
          size={25}
        />
        <View style={styles.line}></View>
        <CustomCheckbox
          checked={isChecked}
          onPress={toggleCheckbox}
          size={25}
        />
        <View style={styles.line}></View>
        <CustomCheckbox
          checked={isChecked}
          onPress={toggleCheckbox}
          size={25}
        />

        {data.status == "completed" && (
          <>
            <View style={styles.line}></View>
            <CompletedCheckbox
              checked={isChecked}
              onPress={toggleCheckbox}
              size={25}
            />
          </>
        )}
      </View>
      <View style={styles.textBox}>
        {data.status == "awarded" && (
          <Text style={styles.checkText}>Awarded</Text>
        )}
        <Text style={styles.checkText}>{data.livingRoom} living room</Text>
        <View style={styles.textLine}></View>
        <Text style={styles.checkText}>{data.bedRoom} Bed room</Text>
        <View style={styles.textLine}></View>
        <Text style={styles.checkText}>{data.bathRoom} Bath room</Text>
        <View style={styles.textLine}></View>
        <Text style={styles.checkText}>Extras</Text>
        <View style={styles.textLine}></View>
        {data.status == "completed" && (
          <Text style={styles.completedText}>Completed</Text>
        )}
      </View>
    </View>
  );
};

export default JobDetailsCard;

const styles = StyleSheet.create({
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
    // width:"%",
  },

  profileImage: {
    width: 70,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  checkitems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  textBox: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
  },
  line: {
    width: "13%",
    height: 1,
    backgroundColor: "#147efb",
  },
  checkText: {
    width: "15%",
    fontSize: 12,
    textAlign: "center",
  },
  textLine: {
    width: "3%",
  },
  button: {
    width: "auto",
    borderBlockColor: "#147efb",
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  awardedText: {
    fontSize: 12,
  },
  customCheck: (size, checked) => ({
    backgroundColor: checked ? "#147efb" : "white",
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    borderRadius: 50,
    borderWidth: 0.9,
    borderColor: "#147efb",
  }),

  completedCheck: (size, checked) => ({
    backgroundColor: checked ? "green" : "white",
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    borderRadius: 50,
    borderWidth: 0.9,
    borderColor: "green",
  }),
  awardedCheck: (size, checked) => ({
    backgroundColor: checked ? "orange" : "white",
    justifyContent: "center",
    alignItems: "center",
    width: size,
    height: size,
    borderRadius: 50,
    borderWidth: 0.9,
    borderColor: "orange",
  }),
});

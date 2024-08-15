import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    // marginBottom: SIZES.small / 2,
    marginHorizontal: SIZES.xSmall,
    paddingVertical: SIZES.xSmall,
    backgroundColor: "white",
    // backgroundColor: 'rgba(52, 52, 52, alpha)',
    //     backgroundColor: 'transparent'
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
    borderBottomWidth: 3,
    borderBottomColor: name === activeTab ? COLORS.primary : "#F3F4F8",
    // width: 135,
    borderRadius: SIZES.xSmall,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    color: "black",
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    // color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    color: name === activeTab ? "white" : COLORS.gray2,
    fontWeight: 700,
  }),
});

export default styles;

// SHARDS OF DARK

// very darrk -- #8F8F8F

// dark -- AAA9B8

//Light Dark ---C3BFCC

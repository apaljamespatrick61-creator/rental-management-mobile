import { StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  headerText:{
    fontSize: moderateScale(24),
    fontWeight: "bold",
    marginBottom: verticalScale(10),
  }
});

import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../constants/theme";

export default StyleSheet.create({
  container: {
    width: scale(280),
    height: verticalScale(40),
    borderRadius: moderateScale(4),
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: moderateScale(8),
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: moderateScale(14),
  },
  disabled: {
    opacity: 0.6,
  },
});

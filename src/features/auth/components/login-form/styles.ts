import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../shared/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: moderateScale(16),
  },

  borderForm: {
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: moderateScale(8),
    padding: moderateScale(16),
    width: scale(150),
    alignItems: "center",
  },

  loginForm: {
    flexDirection: "column",
    justifyContent: "space-between",
    rowGap: verticalScale(4),
  },
  inputRow: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: verticalScale(2),
    borderRadius: moderateScale(4),
    width: scale(120),
    height: verticalScale(17),
    backgroundColor: colors.lightgray,
    paddingHorizontal: moderateScale(4),
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    marginRight: scale(4),
  },
  textInput: {
    flex: 1,
    height: "100%",
    paddingVertical: 0,
    fontSize: moderateScale(8),
  },
  text: {
    fontWeight: "bold",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginTop: verticalScale(2),
  },
  forgotPasswordText: {
    color: colors.primary,
    fontWeight: "bold",
  },
  signInContainer: {
    alignItems: "center",
    marginTop: verticalScale(8),
  },
  signInBtn: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: moderateScale(4),
    backgroundColor: colors.primary,
    borderRadius: moderateScale(4),
    width: scale(120),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: verticalScale(17),
  },
  signInIcon: {
    marginRight: scale(4),
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: moderateScale(10),
    padding: moderateScale(2),
  },

  iconStyle: {
    width: scale(10),
    color: "#fff",
  },
  
});

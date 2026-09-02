import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../shared/constants/theme";
export default StyleSheet.create({
  container: {
    padding: moderateScale(5),
    rowGap: verticalScale(20),
  },
  box: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: moderateScale(10),
    borderBottomWidth: 1,
    borderWidth: 0.5,
    borderColor: colors.borderGray,
    borderRadius: moderateScale(8),
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: scale(12),
  },
  avatarPlaceholder: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(45),
    backgroundColor: colors.lightgray,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(10),
  },

  name: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
  },
  button: {
    width: scale(130),
    height: verticalScale(35),
  },
  profileHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: scale(8),
    marginBottom: verticalScale(5),
    marginTop: verticalScale(10),
  },
  profileDetailsHeader: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    marginVertical: verticalScale(8),
  },
  inputContainer:{
    width: "100%",
    marginBottom: verticalScale(10),
  },
  label:{
    color:colors.textSecondary
  },
  textInput:{
    borderWidth: 1,
    width: "100%",
    borderColor: colors.borderGray,
    borderRadius: moderateScale(4),
    padding: moderateScale(8),
  }
});

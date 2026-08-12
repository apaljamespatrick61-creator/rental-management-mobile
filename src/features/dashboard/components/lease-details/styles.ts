import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../shared/constants/theme";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: verticalScale(20),
  },
  box: {
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: moderateScale(8),
    padding: moderateScale(16),
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: scale(6),
  },
  titleText: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: colors.secondary,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    marginVertical: verticalScale(8),
  },
  leaseDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(6),
  },
  subText:{
    fontSize: moderateScale(14),
    fontWeight: "bold",
  }
});

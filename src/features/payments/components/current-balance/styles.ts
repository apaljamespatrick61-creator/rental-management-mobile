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
    borderLeftColor: colors.primary,
    borderLeftWidth: scale(4),
  },
  boxContent: {
    padding: moderateScale(16),
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: verticalScale(140),
  },
  boxText: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: colors.secondary,
  },
  boxPaymentText: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
  },
  boxSubRow: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: scale(6),
  },
  boxSubText: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: colors.warning,
  },
});

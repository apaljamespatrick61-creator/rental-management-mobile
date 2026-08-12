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
  list: {
    height: verticalScale(220),
  },
  listContent: {
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(6),
  },
  itemRow: {
    rowGap: verticalScale(4),
  },
  itemTitle: {
    fontSize: moderateScale(14),
    color: colors.secondary,
    fontWeight: "600",
  },
  itemDate: {
    fontSize: moderateScale(12),
    color: colors.textSecondary,
  },
  separator: {
    height: verticalScale(10),
  },
});

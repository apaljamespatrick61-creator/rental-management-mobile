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
    borderLeftWidth: scale(1),
  },
  boxContent: {
    padding: moderateScale(16),
    alignItems: "flex-start",
    height: verticalScale(400),
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
  list: {
    width: "100%",
    flex: 1,
  },
  listContent: {
    paddingBottom: verticalScale(8),
  },
  itemRow: {
    rowGap: verticalScale(4),
  },
  itemTitle: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: colors.secondary,
  },
  itemMetaRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemDate: {
    fontSize: moderateScale(12),
    color: colors.textSecondary,
  },
  itemStatus: {
    fontSize: moderateScale(12),
    fontWeight: "700",
  },
  itemSeparator: {
    height: verticalScale(10),
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGray,
    marginVertical: verticalScale(8),
    width: "100%",
  },
});

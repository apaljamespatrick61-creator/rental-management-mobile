import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../../shared/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: moderateScale(10),
    borderBottomWidth: 1,
    borderWidth: 0.5,
    borderColor: colors.borderGray,
    borderRadius: moderateScale(8),
    // height: verticalScale(100),
  },
  titleRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: moderateScale(8),
  },
  itemTitle: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
  },
  itemDate: {
    fontSize: moderateScale(14),
    color: "#888",
    marginTop: verticalScale(11),
  },
  itemDescription: {
    fontSize: moderateScale(14),
    textAlign: "left",
    marginTop: verticalScale(5),
  },
  itemSeparator: {
    height: verticalScale(10),
  },
});

import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../../constants/theme";

export default StyleSheet.create({
  bone: {
    backgroundColor: colors.lightgray,
    borderRadius: moderateScale(4),
  },
});

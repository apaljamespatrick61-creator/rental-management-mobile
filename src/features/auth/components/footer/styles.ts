import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { colors } from "../../../../shared/constants/theme";
export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    bottom: verticalScale(20),
    width: scale(150),
  },

  text: {
    textAlign: "center",
    fontSize: moderateScale(10),
    color: colors.secondary,
  },
    link: {
        fontSize: moderateScale(10),
        color: colors.primary,
    }
});

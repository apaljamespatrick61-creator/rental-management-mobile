import {StyleSheet} from 'react-native';
import {moderateScale,scale,verticalScale} from 'react-native-size-matters';
import {colors,typography} from '../../../../shared/constants/theme';
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: moderateScale(16),
    },
    title: {
        fontSize: moderateScale(26),
        fontWeight: 'bold',
        marginLeft: scale(8),
        color: colors.primary,
    },
    icon: {
        width: scale(32),
        color: colors.primary,
    },
    header:{
        flexDirection: 'row',

    },
    textContainer:{
        paddingTop: verticalScale(8),
    },
    textStyle:{
        fontSize: typography.fontSize,
        color: colors.secondary,
        textAlign: 'center',
    }
   
});
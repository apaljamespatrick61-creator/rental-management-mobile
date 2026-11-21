import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const maxMobileWidth = 390;
const maxMobileHeight = 844;

const effectiveWidth = Math.min(shortDimension, maxMobileWidth);
const effectiveHeight = Math.min(longDimension, maxMobileHeight);

export const scale = (size: number) =>
  (effectiveWidth / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (effectiveHeight / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;

export const ScaledSheet = {
  create: (styles: Record<string, unknown>) =>
    StyleSheet.create(styles as Parameters<typeof StyleSheet.create>[0]),
};

export default {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  s,
  vs,
  ms,
  mvs,
  ScaledSheet,
};

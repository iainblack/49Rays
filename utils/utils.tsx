import { Platform, Dimensions, PixelRatio } from "react-native";
import { DeviceType } from "expo-device";

export const AuthorInfo =
  "bj King is a practical mystic, artist, writer, minister, teacher of creativity, spiritual life coach, and president of Namaste Inc., a non-profit spiritual educational organization based out of Oklahoma City. She works inter-dimensionally as a liaison between the Intergalactic Federation, the Spiritual Hierarchy, the Angelic realm, and Humanity. She is editor and publisher of the Namaste Newsletter and the Namaste Mystery School of Remembering and the author of several books.";

export const fontFamily = Platform.OS === "ios" ? "Cochin" : "Roboto";

export const deviceTypeMap = {
  [DeviceType.UNKNOWN]: "unknown",
  [DeviceType.PHONE]: "phone",
  [DeviceType.TABLET]: "tablet",
  [DeviceType.DESKTOP]: "desktop",
  [DeviceType.TV]: "tv",
};

export function normalize(size, deviceType) {
  const { height, width } = Dimensions.get("window");
  const scale = deviceType === "phone" ? width / 320 : width / 420;
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const PHONE_VIEW_SCREEN_HEIGHT_EXPANDED =
  Dimensions.get("window").height * 0.7;
export const PHONE_VIEW_SCREEN_WIDTH_EXPANDED =
  Dimensions.get("window").width * 0.95;

export const PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED =
  Dimensions.get("window").height * 0.5;
export const PHONE_VIEW_SCREEN_WIDTH_COLLAPSED =
  Dimensions.get("window").width * 0.75;

export const TABLET_VIEW_SCREEN_HEIGHT_COLLAPSED =
  Dimensions.get("window").height * 0.4;
export const TABLET_VIEW_SCREEN_WIDTH_COLLAPSED =
  Dimensions.get("window").width * 0.4;

export const TABLET_VIEW_SCREEN_HEIGHT_EXPANDED =
  Dimensions.get("window").height * 0.7;
export const TABLET_VIEW_SCREEN_WIDTH_EXPANDED =
  Dimensions.get("window").width * 0.7;

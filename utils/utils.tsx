import { Platform, Dimensions, PixelRatio, StyleSheet } from "react-native";
import { DeviceType } from "expo-device";

export const AuthorInfoString =
  "bj King is a practical mystic, artist, writer, minister, teacher of creativity, spiritual life coach, and president of Namaste Enrichment Center Inc., a spiritual educational organization based out of Oklahoma City. She works inter-dimensionally as a liaison between the Intergalactic Federation, the Spiritual Hierarchy, the Angelic realm, and Humanity. She is editor and publisher of the Namaste Newsletter and the Namaste Mystery School of Remembering and the author of several books.";

//export const fontFamily = Platform.OS === "ios" ? "Cochin" : "Roboto";

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

export const PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED =
  Dimensions.get("window").height * 0.52;
export const PHONE_VIEW_SCREEN_WIDTH_COLLAPSED =
  Dimensions.get("window").width * 0.77;

export const TABLET_VIEW_SCREEN_HEIGHT_COLLAPSED =
  Dimensions.get("window").height * 0.52;
export const TABLET_VIEW_SCREEN_WIDTH_COLLAPSED =
  Dimensions.get("window").width * 0.52;

export const PHONE_VIEW_SCREEN_HEIGHT_EXPANDED =
  Dimensions.get("window").height * 0.52;
export const PHONE_VIEW_SCREEN_WIDTH_EXPANDED =
  Dimensions.get("window").width * 0.77;

export const TABLET_VIEW_SCREEN_HEIGHT_EXPANDED =
  Dimensions.get("window").height * 0.52;
export const TABLET_VIEW_SCREEN_WIDTH_EXPANDED =
  Dimensions.get("window").width * 0.52;

export const PHONE_VIEW_SCREEN_HEIGHT_FULL =
  Dimensions.get("window").height * 0.7;
export const PHONE_VIEW_SCREEN_WIDTH_FULL =
  Dimensions.get("window").width * 0.97;

export const TABLET_VIEW_SCREEN_HEIGHT_FULL =
  Dimensions.get("window").height * 0.8;
export const TABLET_VIEW_SCREEN_WIDTH_FULL =
  Dimensions.get("window").width * 0.8;

export const globalStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 3,
  },
  cardShadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    shadowColor: "#000",
    elevation: 3,
  },
});

export const COLOR_VIOLET = "rgb(151,120,209)";
export const COLOR_VIOLET_DARK = "rgb(101,70,159)";
export const COLOR_VIOLET_LIGHT = "rgb(201,170,239)";
export const COLOR_VIOLET_CONTRAST_TEXT = "#FFFFF";
export const COLOR_VIOLET_LIGHT_CONTRAST_TEXT = "#373737";

export enum IconNames {
  close = "close",
  chevronLeft = "chevron-left",
}

export const rayData = [
  {
    title: "Ray 1",
    description: "Blue Ray of God's will or power.",
  },
  {
    title: "Ray 2",
    description: "Yellow ray of enlightenment, love, and wisdom.",
  },
  {
    title: "Ray 3",
    description: "Pink ray of divine love and active intelligence.",
  },
  {
    title: "Ray 4",
    description:
      "White ray of purity, ray of divine mother, harmony through conflict.",
  },
  {
    title: "Ray 5",
    description: "Green ray of truth, concrete knowledge, and science.",
  },
  {
    title: "Ray 6",
    description: "Ruby ray of ministering grace, idealism and devotion.",
  },
  {
    title: "Ray 7",
    description: "Violet flame of transmutation.",
  },
  {
    title: "Lord of the Seven Rays",
  },
  {
    title: "Ray 8",
    description: "Aquamarine ray of clarity and transfiguration.",
  },
  {
    title: "Ray 9",
    description: "Magenta ray of harmony.",
  },
  {
    title: "Ray 10",
    description: "Golden ray of eternal peace.",
  },
  {
    title: "Ray 11",
    description: "Peach ray of divine purpose.",
  },
  {
    title: "Ray 12",
    description: "Opal ray of transformation.",
  },
  {
    title: "Ray 13",
    description: "Silver ray of purification.",
  },
  {
    title: "Ray 14",
    description:
      "Pearlescent red orange ray of dematerialization  and re-materialization.",
  },
  {
    title: "Ray 15",
    description: "Pearlescent green ray of solidarity of purpose.",
  },
  {
    title: "Ray 16",
    description: "Pearlescent peach ray of right use of free will.",
  },
  {
    title: "Ray 17",
    description: "Pearlescent fuchsia ray of personal empowerment.",
  },
  {
    title: "Ray 18",
    description: "Opalescent lavender ray of science and medicine.",
  },
  {
    title: "Ray 19",
    description:
      "Opalescent turquoise ray of changing DNA to increase human brain capacity and use.",
  },
  {
    title: "Ray 20",
    description: "Opalescent royal blue ray of earth magma control.",
  },
  {
    title: "Ray 21",
    description: "Opalescent chartreuse ray of climate control.",
  },
  {
    title: "Ray 22",
    description: "Opalescent ray of emerald fire.",
  },
  {
    title: "Ray 23",
    description: "Opalescent white ray of tachyon energy.",
  },
  {
    title: "Ray 24",
    description: "Pearlescent lavender ray of control of linear time.",
  },
  {
    title: "Ray 25",
    description: "Pearlescent royal blue ray devotion.",
  },
  {
    title: "Ray 26",
    description: "Pearlescent yellow ray of mental clarity.",
  },
  {
    title: "Ray 27",
    description: "Pastel blue ray of tranquility.",
  },
  {
    title: "Ray 28",
    description: "Pastel lavender ray of grace.",
  },
  {
    title: "Ray 29",
    description: "Brown ray of stability.",
  },
  {
    title: "Ray 30",
    description: "Avocado green ray of attention.",
  },
  {
    title: "Ray 31",
    description: "Yellow ochre ray of understanding.",
  },
  {
    title: "Ray 32",
    description: "Pastel yellow ray of compassion and insight.",
  },
  {
    title: "Ray 33",
    description: "Pastel green ray of regeneration.",
  },
  {
    title: "Ray 34",
    description: "Obsidian ray of densification.",
  },
  {
    title: "Ray 35",
    description: "Pastel red ray of glorification.",
  },
  {
    title: "Ray 36",
    description: "Red earth ray of consciousness of earth as a sentient being.",
  },
  {
    title: "Ray 37",
    description: "Burnt orange ray of discernment and discrimination.",
  },
  {
    title: "Ray 38",
    description: "Navy blue ray of intuitive awareness.",
  },
  {
    title: "Ray 39",
    description: "Metallic gray ray of industrial science and engineering.",
  },
  {
    title: "Ray 40",
    description: "Metallic copper ray of electrical power.",
  },
  {
    title: "Ray 41",
    description: "Fluorescent orange ray of goodwill.",
  },
  {
    title: "Ray 42",
    description: "Metallic red ray of ignition.",
  },
  {
    title: "Ray 43",
    description: "Fluorescent yellow ray of temperance.",
  },
  {
    title: "Ray 44",
    description: "Fluorescent green ray of tolerance.",
  },
  {
    title: "Ray 45",
    description: "Fluorescent white ray of harmony in family groups.",
  },
  {
    title: "Ray 46",
    description: "Turquoise ray of gentleness.",
  },
  {
    title: "Ray 47",
    description: "Tan or taupe ray of grounding in harmony.",
  },
  {
    title: "Ray 48",
    description: "Rainbow ray of visionary consciousness in individuals.",
  },
  {
    title: "Ray 49",
    description:
      "Rainbow ray of visionary consciousness in the collective of Humanity.",
  },
];

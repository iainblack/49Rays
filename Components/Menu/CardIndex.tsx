import React from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import {
  AuthorInfoString,
  globalStyles,
  IconNames,
  normalize,
  PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED,
  PHONE_VIEW_SCREEN_WIDTH_COLLAPSED,
  TABLET_VIEW_SCREEN_HEIGHT_COLLAPSED,
  TABLET_VIEW_SCREEN_WIDTH_COLLAPSED,
} from "../../utils/utils";
import IconHeader from "../IconHeader";
import { Image } from "expo-image";

interface CardIndexProps {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  deviceType: string;
}

interface RayIndexes {
  title: string;
  description: string;
  deviceType?: string;
}

// const rayIndexes = [
//     {
//         title: "Ray 1",
//         description: "Blue Ray of God's Will or Power",
//     },
//     {
//         title: "Ray 2",
//         description: "Yellow Ray of Enlightenment, Love, and Wisdom",
//     },
//     {
//         title: "Ray 3",
//         description: "Pink Ray of Divine Love and Active Intelligence",
//     },
//     {
//         title: "Ray 4",
//         description: "White Ray of Purity, Ray of
// ]

export default function CardIndex({
  setMenuIndex,
  deviceType,
}: CardIndexProps) {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
      <IconHeader
        onClose={() => setMenuIndex(0)}
        deviceType={deviceType}
        iconName={IconNames.chevronLeft}
        alignLeft
      />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={[
            styles.text,
            { fontSize: normalize(18, deviceType), marginBottom: 10 },
          ]}
        >
          Card Index
        </Text>
      </View>
      <ScrollView
        horizontal
        style={{ height: height, width: width, marginTop: height * 0.05 }}
      >
        <View
          style={[
            {
              height: height * 0.5,
              width: width * 0.6,
              borderRadius: 16,
              marginHorizontal: 5,
            },
          ]}
        >
          <Image
            source={require("../../assets/index-1.jpg")}
            contentFit="fill"
            style={styles.image}
          />
        </View>
        <View
          style={[
            {
              height: height * 0.5,
              width: width * 0.8,
              borderRadius: 16,
              marginHorizontal: 5,
            },
          ]}
        >
          <Image
            source={require("../../assets/index-2.jpg")}
            contentFit="fill"
            style={styles.image}
          />
        </View>
        <View
          style={[
            {
              height: height * 0.5,
              width: width * 0.8,
              borderRadius: 16,
              marginHorizontal: 5,
            },
          ]}
        >
          <Image
            source={require("../../assets/index-3.jpg")}
            contentFit="fill"
            style={styles.image}
          />
        </View>
        <View
          style={[
            {
              height: height * 0.5,
              width: width * 0.8,
              borderRadius: 16,
              marginHorizontal: 5,
            },
          ]}
        >
          <Image
            source={require("../../assets/index-4.jpg")}
            contentFit="fill"
            style={styles.image}
          />
        </View>
      </ScrollView>
    </Animated.View>
  );
}

function Row({ title, description, deviceType }: RayIndexes) {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text
        style={[
          styles.text,
          {
            fontSize: normalize(14, deviceType),
            textDecorationLine: "underline",
          },
        ]}
      >
        {title}:{"  "}
      </Text>
      <Text
        style={[
          styles.text,
          {
            fontSize: normalize(14, deviceType),
          },
        ]}
      >
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  imageContainer: {
    height: "50%",
    width: "80%",
    borderRadius: 16,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },
});

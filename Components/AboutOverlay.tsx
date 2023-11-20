import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  Pressable,
} from "react-native";
import {
  globalStyles,
  normalize,
  COLOR_VIOLET,
  IconNames,
  COLOR_VIOLET_LIGHT,
  COLOR_VIOLET_LIGHT_CONTRAST_TEXT,
  COLOR_VIOLET_DARK,
} from "../utils/utils";
import { Link, useRouter } from "expo-router";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import IconHeader from "./IconHeader";

interface AboutOverlayProps {
  setShowAboutOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  deviceType: string;
}

export default function AboutOverlay({
  deviceType,
  setShowAboutOverlay,
}: AboutOverlayProps) {
  const { width, height } = useWindowDimensions();
  const router = useRouter();
  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown}
      style={[
        {
          zIndex: 1000,
          position: "absolute",
          bottom: 0,
          height: height * 0.9,
          backgroundColor: COLOR_VIOLET,
          alignItems: "center",
          borderRadius: 20,
        },
        globalStyles.shadow,
      ]}
    >
      <SafeAreaView>
        <View
          style={{
            padding: 20,
          }}
        >
          <IconHeader
            onClose={() => setShowAboutOverlay(false)}
            deviceType={deviceType}
            iconName={IconNames.close}
          />
          <View style={{ borderRadius: 10, backgroundColor: COLOR_VIOLET_LIGHT, padding: 25 }}>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={[styles.text, { fontSize: normalize(18, deviceType) }]}
              >
                The 49 Rays of God
              </Text>
              <Text
                style={[styles.text, { fontSize: normalize(14, deviceType) }]}
              >
                There are currently 49 specific Rays of energy available on Earth.
                They are gifts to Humanity from the heart of God.
              </Text>
              <Text
                style={[styles.text, { fontSize: normalize(14, deviceType) }]}
              >
                This app includes some of the channeled information given from the
                Spiritual Hierarchy, describing each Ray, its purpose, and how to
                invoke the Rays.
              </Text>
              <Text
                style={[styles.text, { fontSize: normalize(14, deviceType) }]}
              >
                More information is included in the book “The 49 Rays of God: Their
                Meanings and Uses” by bj King.
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Pressable onPress={() => router.push('https://www.amazon.com/49-Rays-God-Their-Meanings-ebook/dp/B00Y5TTZZI')}>
                <View style={[styles.button]}>
                  <Text style={[{ fontSize: normalize(14, deviceType), color: 'white', alignSelf: 'center' }]}>Buy the book on Amazon</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => router.push('https://namasteconsciousness.com/')}>
                <View style={[styles.button]}>
                  <Text style={[{ fontSize: normalize(14, deviceType), color: 'white', alignSelf: 'center' }]}>Visit our website</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: COLOR_VIOLET_LIGHT_CONTRAST_TEXT,
    textAlign: "left",
    marginVertical: 10,
  },
  headerText: {
    color: COLOR_VIOLET_LIGHT_CONTRAST_TEXT,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLOR_VIOLET_DARK,
    padding: 10,
    borderRadius: 16,
    marginTop: 15,
  },
});

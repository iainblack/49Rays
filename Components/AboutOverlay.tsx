import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { globalStyles, normalize, COLOR_VIOLET } from "../utils/utils";
import CloseHeader from "./CloseHeader";
import { Link } from "expo-router";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

interface AboutOverlayProps {
  setShowAboutOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  deviceType: string;
}

export default function AboutOverlay({
  deviceType,
  setShowAboutOverlay,
}: AboutOverlayProps) {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown}
      style={[
        {
          zIndex: 1000,
          position: "absolute",
          bottom: 0,
          height: height * 0.75,
          backgroundColor: COLOR_VIOLET,
          alignItems: "center",
          borderRadius: 20,
        },
        globalStyles.shadow,
      ]}
    >
      <SafeAreaView>
        <CloseHeader
          onClose={() => setShowAboutOverlay(false)}
          deviceType={deviceType}
        />
        <View
          style={{
            width: width,
            padding: 20,
          }}
        >
          <View style={{}}>
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
              More information included in the book “The 49 Rays of God: Their
              Meanings and Uses” by bj King
            </Text>
            <View
              style={{
                marginTop: 40,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[
                    styles.text,
                    { fontSize: normalize(14, deviceType), marginVertical: 16 },
                  ]}
                >
                  Find the book on{" "}
                </Text>
                <Link
                  style={[
                    styles.text,
                    {
                      fontSize: normalize(14, deviceType),
                      textDecorationLine: "underline",
                    },
                  ]}
                  href="https://www.amazon.com/49-Rays-God-Their-Meanings-ebook/dp/B00Y5TTZZI"
                >
                  Amazon
                </Link>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[
                    styles.text,
                    { fontSize: normalize(14, deviceType), marginVertical: 16 },
                  ]}
                >
                  Website:{" "}
                </Text>
                <Link
                  style={[
                    styles.text,
                    {
                      fontSize: normalize(14, deviceType),
                      textDecorationLine: "underline",
                    },
                  ]}
                  href="https://namasteconsciousness.com/"
                >
                  namasteconsciousness.com
                </Link>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "left",
    marginVertical: 10,
  },
});

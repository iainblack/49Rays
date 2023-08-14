import { Link } from "expo-router";
import React from "react";
import { useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BackgroundCarousel from "../components/BackgroundCarousel";

import CardCarousel from "../components/CardCarousel";

export default function Browse() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <GestureHandlerRootView
      style={[
        { flex: 1, alignItems: "center", justifyContent: "center" },
        StyleSheet.absoluteFillObject,
      ]}
    >
      <BackgroundCarousel scrollX={scrollX} />
      <CardCarousel scrollX={scrollX} />
      <Link href="/" style={{ color: "white", padding: 50 }}>
        Home
      </Link>
    </GestureHandlerRootView>
  );
}

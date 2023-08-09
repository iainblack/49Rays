import React from "react";
import { useRef } from "react";
import { Animated } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BackgroundCarousel from "./Components/BackgroundCarousel";

import CardCarousel from "./Components/CardCarousel";

export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BackgroundCarousel scrollX={scrollX} />
      <CardCarousel scrollX={scrollX} />
    </GestureHandlerRootView>
  );
}

import React from "react";
import { useRef } from "react";
import { Animated, View, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={[styles.container, StyleSheet.absoluteFillObject]}>
      <View>
        <Link href="/browse" style={{ color: "white" }}>
          Browse Cards
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "black",
  },
});

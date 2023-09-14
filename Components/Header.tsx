import React from "react";
import { Dimensions, View, Text } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        width: "100%",
        top: 0,
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Text>Test 1</Text>
      <Text>Test 2</Text>
      <Text>Test 3</Text>
    </View>
  );
}

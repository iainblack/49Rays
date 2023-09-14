import React from "react";
import {
  Dimensions,
  View,
  Text,
  Pressable,
  StyleSheet,
  Button,
} from "react-native";
import { AuthorInfo, normalize } from "../utils/utils";

interface AboutOverlayProps {
  setShowAboutOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  deviceType: string;
}

export default function AboutOverlay({
  setShowAboutOverlay,
  deviceType,
}: AboutOverlayProps) {
  console.log("rendered");
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: "black",
          justifyContent: "space-between",
          alignItems: "center",
          padding: Dimensions.get("window").width * 0.05,
        },
      ]}
    >
      <View style={{}}>
        <Text style={{ color: "white", fontSize: normalize(16, deviceType) }}>
          {AuthorInfo}
        </Text>
      </View>
      <Pressable style={{}}>
        <Button
          color={"white"}
          title="Close"
          onPress={() => setShowAboutOverlay(false)}
        />
      </Pressable>
    </View>
  );
}

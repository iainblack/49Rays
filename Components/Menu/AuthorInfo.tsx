import React from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import { View, Text, StyleSheet } from "react-native";
import { AuthorInfoString, IconNames, normalize } from "../../utils/utils";
import IconHeader from "../IconHeader";
import Divider from "../Divider";

interface AuthorInfoProps {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  deviceType: string;
}

export default function AuthorInfo({
  setMenuIndex,
  deviceType,
}: AuthorInfoProps) {
  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
      <IconHeader
        onClose={() => setMenuIndex(0)}
        deviceType={deviceType}
        iconName={IconNames.chevronLeft}
        alignLeft
      />
      <View style={{ padding: 15 }}>
        <View style={{ marginBottom: 30 }}>
          <Text
            style={[
              styles.text,
              { fontSize: normalize(18, deviceType), marginBottom: 20 },
            ]}
          >
            bj King
          </Text>
          <Text style={[styles.text, { fontSize: normalize(14, deviceType) }]}>
            {AuthorInfoString}
          </Text>
        </View>
        <Divider />
        <View style={{ marginTop: 30 }}>
          <Text
            style={[
              styles.text,
              {
                fontSize: normalize(18, deviceType),
                marginBottom: 20,
              },
            ]}
          >
            Artwork Credit
          </Text>
          <Text style={[styles.text, { fontSize: normalize(12, deviceType) }]}>
            Card-deck design by Shelagh Schopen
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

import React from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import { View, Text, StyleSheet } from "react-native";
import { AuthorInfoString, COLOR_VIOLET_LIGHT, COLOR_VIOLET_LIGHT_CONTRAST_TEXT, IconNames, normalize } from "../../utils/utils";
import IconHeader from "../IconHeader";
import Divider from "../Divider";
import { ScrollView } from "react-native-gesture-handler";

interface AuthorInfoProps {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  deviceType: string;
}

export default function AuthorInfo({
  setMenuIndex,
  deviceType,
}: AuthorInfoProps) {
  return (
    <Animated.View
      entering={SlideInRight}
      style={{ height: '100%' }}>
      <IconHeader
        onClose={() => setMenuIndex(0)}
        deviceType={deviceType}
        iconName={IconNames.chevronLeft}
        alignLeft
      />
      <ScrollView bounces={false} style={{ height: '100%', alignSelf: 'center', width: deviceType === "tablet" ? "85%" : "100%" }}>
        <View style={{ borderRadius: 10, padding: 20 }}>
          <Text
            style={[
              styles.headerText,
              { fontSize: normalize(18, deviceType) },
            ]}
          >
            bj King
          </Text>
          <Text style={[styles.text, { fontSize: normalize(14, deviceType) }]}>
            {AuthorInfoString}
          </Text>
        </View>
        <Divider />
        <View style={{ marginTop: 0, borderRadius: 10, padding: 20 }}>
          <Text
            style={[
              styles.headerText,
              {
                fontSize: normalize(18, deviceType),
              },
            ]}
          >
            Artwork Credit
          </Text>
          <Text style={[styles.text, { fontSize: normalize(14, deviceType) }]}>
            Photography and card design by Shelagh Schopen.
          </Text>
        </View>
      </ScrollView>
    </Animated.View >
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: "white",
    marginBottom: 20,
  },
  text: {
    color: "white",
    marginVertical: 18,
  },
});

import React from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { AuthorInfoString, COLOR_VIOLET_LIGHT, COLOR_VIOLET_LIGHT_CONTRAST_TEXT, IconNames, normalize } from "../../utils/utils";
import IconHeader from "../IconHeader";
import Divider from "../Divider";
import { ScrollView } from "react-native-gesture-handler";

interface SuggestedPrayerProps {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  deviceType: string;
}

export default function SuggestedPrayer({
  setMenuIndex,
  deviceType,
}: SuggestedPrayerProps) {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutRight} style={{ height: '100%' }}>
      <IconHeader
        onClose={() => setMenuIndex(0)}
        deviceType={deviceType}
        iconName={IconNames.chevronLeft}
        alignLeft
      />
      <ScrollView bounces={false} style={{ height: '100%' }}>
        <View style={{ borderRadius: 14 }}>
          <View style={{ padding: 20 }}>
            <Text
              style={[
                styles.headerText,
                {
                  fontSize: normalize(18, deviceType),
                },
              ]}
            >
              Suggested Prayer for invoking the 49 Rays of God
            </Text>
            <Text style={[styles.text, { fontSize: normalize(14, deviceType) }]}>
              "I ask that all energy work that is done in and through my body
              be in alignment with the divine plan of the creator for planet Earth,
              all species of life on Earth and beyond. Through the power vested in
              me by the Cosmic Christ Consciousness, I deliberately call forth the
              ~~Ray to calm and transmute this situation. So be it."
            </Text>
          </View>
          <Divider />
          <View style={{ padding: 20 }}>
            <Text
              style={[
                styles.headerText,
                { fontSize: normalize(18, deviceType) },
              ]}
            >
              One People,
            </Text>
            <Text
              style={[
                styles.headerText,
                { fontSize: normalize(18, deviceType) },
              ]}
            >
              One Planet,
            </Text>
            <Text
              style={[
                styles.headerText,
                { fontSize: normalize(18, deviceType) },
              ]}
            >
              One Purpose,
            </Text>
            <Text
              style={[
                styles.headerText,
                { fontSize: normalize(18, deviceType) },
              ]}
            >
              Peaceful Coexistence
            </Text>
            <Text
              style={[
                styles.headerText,
                { fontSize: normalize(18, deviceType) },
              ]}
            >
              of all life on Earth.
            </Text>
          </View>
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

import React from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { AuthorInfoString, IconNames, normalize } from "../../utils/utils";
import IconHeader from "../IconHeader";
import Divider from "../Divider";

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
    <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
      <IconHeader
        onClose={() => setMenuIndex(0)}
        deviceType={deviceType}
        iconName={IconNames.chevronLeft}
        alignLeft
      />
      <View style={{ padding: 15 }}>
        <View style={{ marginBottom: height * 0.05 }}>
          <Text
            style={[
              styles.text,
              {
                fontSize: normalize(18, deviceType),
                marginBottom: height * 0.05,
              },
            ]}
          >
            Suggested Prayer for invoking the 49 Rays of God
          </Text>
          <Text style={[styles.text, { fontSize: normalize(14, deviceType) }]}>
            "I ask that all my energy work that is done in and through my body
            be alignment with the divine plan of the creator for planet Earth,
            all species of life on Earth an beyond. Through the power vested inn
            me by the Cosmic Christ Consciousness, I deliberately call forth the
            ~~Ray to calm and transmute this situation. So be it."
          </Text>
        </View>
        <Divider />
        <View style={{ marginTop: height * 0.05, alignItems: "center" }}>
          <Text
            style={[
              styles.text,
              { fontSize: normalize(18, deviceType), marginBottom: 10 },
            ]}
          >
            One People,
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: normalize(18, deviceType), marginBottom: 10 },
            ]}
          >
            One Planet,
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: normalize(18, deviceType), marginBottom: 10 },
            ]}
          >
            One Purpose,
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: normalize(18, deviceType), marginBottom: 10 },
            ]}
          >
            Peaceful Coexistence
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: normalize(18, deviceType), marginBottom: 10 },
            ]}
          >
            of all life on Earth.
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
  },
});

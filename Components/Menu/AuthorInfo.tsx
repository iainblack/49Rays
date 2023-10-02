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
      <View>
        <View style={{ marginBottom: 30 }}>
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
        <View style={{ marginTop: 30 }}>
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
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontWeight: '300',
    textAlign: 'left'
  },
});

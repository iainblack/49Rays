import { deviceType } from "expo-device";
import React from "react";
import { IconNames, normalize } from "../../utils/utils";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Divider from "../Divider";
import Animated, { SlideInLeft, SlideOutLeft } from "react-native-reanimated";
import IconHeader from "../IconHeader";

interface MenuHomeProps {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  onCloseClick: () => void;
  deviceType: string;
  isFirstRender: React.MutableRefObject<boolean>;
}

export default function MenuHome({
  isFirstRender,
  setMenuIndex,
  deviceType,
  onCloseClick,
}: MenuHomeProps) {
  return (
    <Animated.View
      exiting={SlideOutLeft}
      entering={
        isFirstRender && isFirstRender.current ? undefined : SlideInLeft
      }
    >
      <IconHeader
        deviceType={deviceType}
        onClose={() => {
          isFirstRender.current = true;
          onCloseClick();
        }}
        iconName={IconNames.close}
      />
      {/* <ViewSelection deviceType={deviceType} /> */}
      <Pressable
        onPress={() => {
          setMenuIndex(1);
        }}
      >
        <View style={[styles.listItem]}>
          <View style={[styles.iconContainer]}>
            <MaterialIcons
              name="people"
              size={deviceType === "phone" ? 24 : 30}
              color="white"
            />
            <Text
              style={[
                styles.text,
                { fontSize: normalize(16, deviceType), marginLeft: 10 },
              ]}
            >
              Author Info
            </Text>
          </View>
          <MaterialIcons
            name="chevron-right"
            size={deviceType === "phone" ? 18 : 28}
            color="white"
          />
        </View>
      </Pressable>
      <Divider />
      <Pressable
        onPress={() => {
          setMenuIndex(2);
        }}
      >
        <View style={[styles.listItem]}>
          <View style={[styles.iconContainer]}>
            <MaterialCommunityIcons
              name="magnify"
              size={deviceType === "phone" ? 24 : 30}
              color="white"
            />
            <Text
              style={[
                styles.text,
                { fontSize: normalize(16, deviceType), marginLeft: 10 },
              ]}
            >
              Card Index
            </Text>
          </View>
          <MaterialIcons
            name="chevron-right"
            s
            size={deviceType === "phone" ? 18 : 28}
            color="white"
          />
        </View>
      </Pressable>
      <Divider />
      <Pressable
        onPress={() => {
          setMenuIndex(3);
        }}
      >
        <View style={[styles.listItem]}>
          <View style={[styles.iconContainer]}>
            <MaterialCommunityIcons
              name="script-text-outline"
              size={deviceType === "phone" ? 24 : 30}
              color="white"
            />
            <Text
              style={[
                styles.text,
                { fontSize: normalize(16, deviceType), marginLeft: 10 },
              ]}
            >
              Suggested Prayer
            </Text>
          </View>
          <MaterialIcons
            name="chevron-right"
            size={deviceType === "phone" ? 18 : 28}
            color="white"
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}

function ViewSelection(deviceType) {
  return (
    <View>
      <View
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
          },
        ]}
      >
        <Text
          style={[styles.titleText, { fontSize: normalize(24, deviceType) }]}
        >
          Select a View
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Pressable>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="cards-variant"
              size={normalize(100, deviceType)}
              color="white"
            />
            <Text
              style={[
                styles.titleText,
                { fontSize: normalize(18, deviceType), paddingTop: 10 },
              ]}
            >
              Daily Inspiration
            </Text>
          </View>
        </Pressable>
        <Pressable>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="view-carousel-outline"
              size={normalize(100, deviceType)}
              color="white"
            />
            <Text
              style={[
                styles.titleText,
                { fontSize: normalize(18, deviceType), paddingTop: 10 },
              ]}
            >
              Browse Cards
            </Text>
          </View>
        </Pressable>
      </View>
      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "white",
    marginBottom: 20,
  },
  text: {
    fontWeight: "400",
    color: "white",
    marginVertical: 18,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

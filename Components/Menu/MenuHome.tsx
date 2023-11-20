import React from "react";
import { IconNames, normalize } from "../../utils/utils";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Divider from "../Divider";
import Animated, { SlideInLeft, SlideOutLeft } from "react-native-reanimated";
import IconHeader from "../IconHeader";
import { HomeTypes } from "../../app";

interface MenuHomeProps {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  deviceType: string;
  isFirstRender: React.MutableRefObject<boolean>;
  setHomeState: React.Dispatch<React.SetStateAction<number>>;
  homeState: number;
}

export default function MenuHome({
  isFirstRender,
  setMenuIndex,
  deviceType,
  setShowMenu,
  setHomeState,
  homeState,
}: MenuHomeProps) {
  return (
    <Animated.View
      //exiting={SlideOutLeft}
      entering={
        isFirstRender && isFirstRender.current ? undefined : SlideInLeft
      }
    >
      <IconHeader
        deviceType={deviceType}
        onClose={() => {
          isFirstRender.current = true;
          setShowMenu(false);
        }}
        iconName={IconNames.close}
      />
      <ViewSelection
        deviceType={deviceType}
        setHomeState={setHomeState}
        homeState={homeState}
        setShowMenu={setShowMenu}
      />
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
      <Divider />
      <Pressable
        onPress={() => {
          setMenuIndex(4);
        }}
      >
        <View style={[styles.listItem]}>
          <View style={[styles.iconContainer]}>
            <MaterialIcons
              name="info-outline"
              size={deviceType === "phone" ? 24 : 30}
              color="white"
            />
            <Text
              style={[
                styles.text,
                { fontSize: normalize(16, deviceType), marginLeft: 10 },
              ]}
            >
              More App Info
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

interface ViewSelectionProps {
  deviceType: string;
  setHomeState: React.Dispatch<React.SetStateAction<number>>;
  homeState: number;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function ViewSelection({
  deviceType,
  setHomeState,
  homeState,
  setShowMenu,
}: ViewSelectionProps) {
  return (
    <View>
      <View
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={[styles.titleText, { fontSize: normalize(18, deviceType) }]}
        >
          Select View
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            setHomeState(0);
            setShowMenu(false);
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View style={{
              height: normalize(80, deviceType),
              width: normalize(80, deviceType),
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
              <MaterialCommunityIcons
                name="cards-outline"
                size={normalize(70, deviceType)}
                color="white"
              />
            </View>
            <Text style={[styles.text, { fontSize: normalize(16, deviceType) }]}>Daily Inspiration</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            setHomeState(1);
            setShowMenu(false);
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="view-array-outline"
              size={normalize(90, deviceType)}
              color="white"
              style={{
                height: normalize(80, deviceType),
                alignItems: 'center',
              }}
            />
            <Text style={[styles.text, { fontSize: normalize(16, deviceType) }]}>Browse Cards</Text>
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

import { getDeviceTypeAsync } from "expo-device";
import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import { HomeState } from "../app";
import { data } from "../utils/images";
import { deviceTypeMap, fontFamily, normalize } from "../utils/utils";
import CardCarousel from "./CardCarousel";
import Header from "./Header";

interface CardScreenProps {
  setHomeState?: React.Dispatch<React.SetStateAction<HomeState>>;
  scrollX?: any;
}

export default function CardScreen({ setHomeState, scrollX }: CardScreenProps) {
  const [deviceType, setDeviceType] = React.useState<string>("phone");
  const [showExpandedView, setShowExpandedView] = React.useState<boolean>(true);
  const spinValue = useSharedValue<number>(0);

  useEffect(() => {
    getDeviceTypeAsync().then((deviceType) => {
      const thisDeviceType = deviceTypeMap[deviceType];
      setDeviceType(thisDeviceType);
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
      }}
    >
      <Header />
      <CardCarousel
        scrollX={scrollX}
        spinValue={spinValue}
        expandedView={showExpandedView}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: Dimensions.get("window").height * 0.1,
          alignItems: "center",
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Pressable
          style={{
            shadowColor: "#000",
            shadowOpacity: 1,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 2,
          }}
          onPress={() => (spinValue.value = spinValue.value ? 0 : 1)}
        >
          <Text
            style={[styles.buttonText, { fontSize: normalize(18, deviceType) }]}
          >
            {showExpandedView ? "Flip" : "Flip All"}
          </Text>
        </Pressable>
        <Pressable
          style={{
            shadowColor: "#000",
            shadowOpacity: 1,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 2,
          }}
          onPress={() => setShowExpandedView(!showExpandedView)}
        >
          <Text
            style={[styles.buttonText, { fontSize: normalize(18, deviceType) }]}
          >
            {showExpandedView ? "Collapse" : "Expand"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  },
  buttonText: {
    color: "white",
    fontFamily: fontFamily,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  },
});

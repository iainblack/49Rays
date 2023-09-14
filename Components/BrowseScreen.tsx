import { getDeviceTypeAsync } from "expo-device";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import { HomeState } from "../app";
import { deviceTypeMap, fontFamily, normalize } from "../utils/utils";
import CardCarousel from "./CardCarousel";

interface CardScreenProps {
  setHomeState?: React.Dispatch<React.SetStateAction<HomeState>>;
  scrollX?: any;
}

export default function CardScreen({ setHomeState, scrollX }: CardScreenProps) {
  const [shuffleCount, setShuffleCount] = React.useState<number>(0);
  const [deviceType, setDeviceType] = React.useState<string>("phone");
  const spinValue = useSharedValue<number>(0);
  const flatListRef = React.useRef(null);

  useEffect(() => {
    getDeviceTypeAsync().then((deviceType) => {
      const thisDeviceType = deviceTypeMap[deviceType];
      setDeviceType(thisDeviceType);
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        justifyContent: "space-around",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
      }}
    >
      <View
        style={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={[
            styles.titleText,
            {
              fontSize: normalize(22, deviceType),
            },
          ]}
        >
          Browse the Deck
        </Text>
      </View>
      <CardCarousel
        scrollX={scrollX}
        spinValue={spinValue}
        flatListRef={flatListRef}
        shuffleCount={shuffleCount}
      />
      <View
        style={{
          width: "100%",
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
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <MaterialCommunityIcons name="rotate-360" size={32} color="white" />
            <Text
              style={[
                styles.buttonText,
                { fontSize: normalize(14, deviceType) },
              ]}
            >
              {"Flip All"}
            </Text>
          </View>
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
          onPress={() => setShuffleCount(shuffleCount + 1)}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="shuffle-variant"
              size={32}
              color="white"
            />
            <Text
              style={[
                styles.buttonText,
                { fontSize: normalize(14, deviceType) },
              ]}
            >
              {"Shuffle"}
            </Text>
          </View>
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
  titleText: {
    color: "white",
    fontFamily: fontFamily,
    shadowColor: "#000",
    shadowOpacity: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  },
});

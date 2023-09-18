import { getDeviceTypeAsync } from "expo-device";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { HomeState } from "../app";
import { deviceTypeMap, normalize } from "../utils/utils";

interface HomeScreenProps {
  setHomeState: React.Dispatch<React.SetStateAction<HomeState>>;
  homeState: HomeState;
}

export default function HomeScreen({
  setHomeState,
  homeState,
}: HomeScreenProps) {
  const [deviceType, setDeviceType] = React.useState<string>("phone");

  useEffect(() => {
    getDeviceTypeAsync().then((deviceType) => {
      const thisDeviceType = deviceTypeMap[deviceType];
      setDeviceType(thisDeviceType);
    });
  }, []);

  return (
    <Animated.View
      key="home-screen"
      entering={FadeIn.duration(1000).delay(100)}
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={[styles.titleText, { fontSize: normalize(40, deviceType) }]}>
        The 49 Rays
      </Text>
      <Text
        style={[
          styles.titleText,
          {
            marginBottom: Dimensions.get("window").height * 0.1,
            fontSize: normalize(40, deviceType),
          },
        ]}
      >
        Of God
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => setHomeState({ ...homeState, showCards: true })}
      >
        <Text
          style={[styles.buttonText, { fontSize: normalize(20, deviceType) }]}
        >
          Browse Cards
        </Text>
      </Pressable>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: Dimensions.get("window").height * 0.1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={[
              styles.link,
              {
                textDecorationLine: "none",
                fontSize: normalize(12, deviceType),
              },
            ]}
          >
            Buy the book on{"  "}
          </Text>
          <Link
            style={[styles.link, { fontSize: normalize(12, deviceType) }]}
            href="https://www.amazon.com/49-Rays-God-Their-Meanings-ebook/dp/B00Y5TTZZI"
          >
            Amazon
          </Link>
        </View>
        <Link
          style={[styles.link, { fontSize: normalize(12, deviceType) }]}
          href="https://namasteconsciousness.com/"
        >
          namasteconsciousness.com
        </Link>
      </View>
    </Animated.View>
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
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOpacity: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  },
  link: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
    shadowColor: "#000",
    shadowOpacity: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
  },
});

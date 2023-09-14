import React, { useEffect } from "react";
import { useRef } from "react";
import { Animated, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "../components/HomeScreen";
import CardScreen from "../components/BrowseScreen";
import Header from "../components/Header";
import { getDeviceTypeAsync } from "expo-device";
import { deviceTypeMap } from "../utils/utils";
import AboutOverlay from "../components/AboutOverlay";

export interface HomeState {
  showCards: boolean;
}

export default function Home() {
  const [showAboutOverlay, setShowAboutOverlay] =
    React.useState<boolean>(false);
  const [deviceType, setDeviceType] = React.useState<string>("phone");

  const scrollX = useRef(new Animated.Value(0)).current;
  const blurHash = "LhJt0pD%-m%1},V_xFs:rEs;Vbe:";

  useEffect(() => {
    getDeviceTypeAsync().then((deviceType) => {
      const thisDeviceType = deviceTypeMap[deviceType];
      setDeviceType(thisDeviceType);
    });
  }, []);

  return (
    <View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      <Image
        source={require("../assets/bg.jpg")}
        style={[StyleSheet.absoluteFillObject, styles.backgroundImage]}
        placeholder={blurHash}
        contentFit={"cover"}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          deviceType={deviceType}
          setShowAboutOverlay={setShowAboutOverlay}
        />
        <CardScreen scrollX={scrollX} deviceType={deviceType} />
      </SafeAreaView>
      {showAboutOverlay && (
        <AboutOverlay
          setShowAboutOverlay={setShowAboutOverlay}
          deviceType={deviceType}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

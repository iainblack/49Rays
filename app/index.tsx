import React, { useCallback, useEffect } from "react";
import { useRef } from "react";
import { Animated, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import CardScreen from "../components/BrowseScreen";
import Header from "../components/Header";
import { getDeviceTypeAsync } from "expo-device";
import { deviceTypeMap } from "../utils/utils";
import AboutOverlay from "../components/AboutOverlay";
import Menu from "../components/Menu/Menu";
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export interface HomeState {
  showCards: boolean;
}

export default function Home() {
  const [appIsReady, setAppIsReady] = React.useState<boolean>(false);
  const [showAboutOverlay, setShowAboutOverlay] =
    React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [deviceType, setDeviceType] = React.useState<string>("phone");

  const scrollX = useRef(new Animated.Value(0)).current;
  const blurHash = "LhJt0pD%-m%1},V_xFs:rEs;Vbe:";

  useEffect(() => {
    async function prepare() {
      try {
        //Load device type
        const deviceType = await getDeviceTypeAsync();
        const thisDeviceType = deviceTypeMap[deviceType];
        setDeviceType(thisDeviceType);
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  setTimeout(() => {
    setAppIsReady(true);
    SplashScreen.hideAsync();
  }, 2000);

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
      {appIsReady && (
        <SafeAreaView style={{ flex: 1 }}>
          <Header
            deviceType={deviceType}
            setShowAboutOverlay={setShowAboutOverlay}
            setShowMenu={setShowMenu}
            showAboutOverlay={showAboutOverlay}
            showMenu={showMenu}
          />
          <CardScreen scrollX={scrollX} deviceType={deviceType} />
          {showAboutOverlay && (
            <>
              <AboutOverlay
                setShowAboutOverlay={setShowAboutOverlay}
                deviceType={deviceType}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    zIndex: 20,
                  },
                ]}
              />
            </>
          )}
          {showMenu && (
            <>
              <Menu deviceType={deviceType} setShowMenu={setShowMenu} />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    zIndex: 20,
                  },
                ]}
              />
            </>
          )}
        </SafeAreaView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});

import React, { useCallback, useEffect } from "react";
import { useRef } from "react";
import { Animated, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CardScreen from "../components/BrowseScreen";
import Header from "../components/Header";
import { getDeviceTypeAsync } from "expo-device";
import { deviceTypeMap } from "../utils/utils";
import AboutOverlay from "../components/AboutOverlay";
import Menu from "../components/Menu/Menu";
import * as SplashScreen from "expo-splash-screen";

export interface HomeState {
  showCards: boolean;
}

export default function Home() {
  const [showAboutOverlay, setShowAboutOverlay] =
    React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [deviceType, setDeviceType] = React.useState<string>("phone");

  const scrollX = useRef(new Animated.Value(0)).current;
  const blurHash = "LhJt0pD%-m%1},V_xFs:rEs;Vbe:";

  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    async function prepare() {
      try {
        //Load device type
        const deviceType = await getDeviceTypeAsync();
        const thisDeviceType = deviceTypeMap[deviceType];
        setDeviceType(thisDeviceType);

        // load background image
        Image.prefetch(require("../assets/bg.jpg"));

        await new Promise((resolve) => setTimeout(resolve, 9000));
      } catch (e) {
        //console.warn(e);
      } finally {
        //await SplashScreen.hideAsync();
      }
    }
    prepare();
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
          setShowMenu={setShowMenu}
        />
        <CardScreen scrollX={scrollX} deviceType={deviceType} />
        {showAboutOverlay && (
          <AboutOverlay
            setShowAboutOverlay={setShowAboutOverlay}
            deviceType={deviceType}
          />
        )}
        {showMenu && <Menu deviceType={deviceType} setShowMenu={setShowMenu} />}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});

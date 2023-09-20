import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { getDeviceTypeAsync } from "expo-device";
import { deviceTypeMap } from "../utils/utils";
import AboutOverlay from "../components/AboutOverlay";
import Menu from "../components/Menu/Menu";
import { SplashScreen } from "expo-router";
import Header from "../components/Header";
import BrowseScreen from "../components/BrowseScreen";
import FullScreenView from "../components/FullScreenView";

SplashScreen.preventAutoHideAsync();

export enum HomeTypes {
  CARDS = 0,
  BROWSE = 1,
}

export default function Home() {
  const [appIsReady, setAppIsReady] = React.useState<boolean>(false);
  const [showFullScreen, setShowFullScreen] = React.useState<boolean>(false);
  const [showAboutOverlay, setShowAboutOverlay] =
    React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [deviceType, setDeviceType] = React.useState<string>("phone");
  const [homeState, setHomeState] = React.useState<HomeTypes>(HomeTypes.CARDS);

  const frontCardId = React.useRef<number>(0);
  const showBackOnFullScreen = React.useRef<boolean>(false);
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

  useEffect(() => {
    frontCardId.current = 0;
    console.log('reset frontCardId');
  }, [homeState]);

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
          {!showFullScreen &&
            <>
              <Header
                deviceType={deviceType}
                setShowAboutOverlay={setShowAboutOverlay}
                setShowMenu={setShowMenu}
                showAboutOverlay={showAboutOverlay}
                showMenu={showMenu}
              />
              <BrowseScreen deviceType={deviceType} homeState={homeState} setShowFullScreen={setShowFullScreen} frontCardId={frontCardId} showBack={showBackOnFullScreen} />
            </>}
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
              <Menu
                deviceType={deviceType}
                setShowMenu={setShowMenu}
                setHomeState={setHomeState}
                homeState={homeState}
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
        </SafeAreaView>
      )}
      {showFullScreen && (
        <FullScreenView
          setShowFullScreenView={setShowFullScreen}
          deviceType={deviceType}
          cardId={frontCardId.current}
          showBack={showBackOnFullScreen.current}
        />
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

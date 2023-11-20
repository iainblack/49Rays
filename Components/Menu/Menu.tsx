import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { globalStyles, COLOR_VIOLET, IconNames } from "../../utils/utils";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import MenuHome from "./MenuHome";
import AuthorInfo from "./AuthorInfo";
import CardIndex from "./CardIndex";
import SuggestedPrayer from "./SuggestedPrayer";
import AppInfo from "./AppInfo";

interface MenuProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setHomeState: React.Dispatch<React.SetStateAction<number>>;
  navigateToCard: (cardId: number) => void;
  showMenu: boolean;
  deviceType: string;
  homeState: number;
}

export default function Menu({
  deviceType,
  setShowMenu,
  setHomeState,
  navigateToCard,
  homeState,
  showMenu,
}: MenuProps) {
  const isFirstRender = React.useRef<boolean>(true);
  const [transitionOutHome, setTransitionOutHome] =
    React.useState<boolean>(true);
  const { width, height } = useWindowDimensions();
  const [menuIndex, setMenuIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, []);

  return (
    <Animated.View
      entering={SlideInDown}
      exiting={SlideOutDown}
      style={[
        globalStyles.shadow,
        {
          position: "absolute",
          width: width,
          height: height * 0.9,
          left: 0,
          bottom: 0,
          zIndex: 1000,
          backgroundColor: COLOR_VIOLET,
          borderRadius: 20,
          display: showMenu ? "flex" : "none",
        },
      ]}
    >
      <SafeAreaView>
        <View
          style={{
            width: width,
            padding: 20,
          }}
        >
          {menuIndex === 0 && (
            <MenuHome
              setHomeState={setHomeState}
              setMenuIndex={setMenuIndex}
              isFirstRender={isFirstRender}
              deviceType={deviceType}
              setShowMenu={setShowMenu}
              homeState={homeState}
            />
          )}
          {menuIndex === 1 && (
            <AuthorInfo setMenuIndex={setMenuIndex} deviceType={deviceType} />
          )}
          {menuIndex === 2 && (
            <CardIndex setMenuIndex={setMenuIndex} deviceType={deviceType} navigateToCard={navigateToCard} />
          )}
          {menuIndex === 3 && (
            <SuggestedPrayer
              setMenuIndex={setMenuIndex}
              deviceType={deviceType}
            />
          )}
          {menuIndex === 4 && (
            <AppInfo setMenuIndex={setMenuIndex} deviceType={deviceType} />
          )}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});

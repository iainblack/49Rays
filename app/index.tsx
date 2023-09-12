import React from "react";
import { useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "../components/HomeScreen";
import CardScreen from "../components/BrowseScreen";

export interface HomeState {
  showCards: boolean;
}

export default function Home() {
  const [homeState, setHomeState] = React.useState<HomeState>({
    showCards: false,
  });

  const scrollX = useRef(new Animated.Value(0)).current;
  const blurHash = "LhJt0pD%-m%1},V_xFs:rEs;Vbe:";

  return (
    <GestureHandlerRootView
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
      <CardScreen scrollX={scrollX} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

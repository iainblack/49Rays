import React from "react";
import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { HomeState } from "../app";
import { fontFamily } from "../utils/utils";

interface HomeScreenProps {
  setHomeState: React.Dispatch<React.SetStateAction<HomeState>>;
  homeState: HomeState;
}

export default function HomeScreen({
  setHomeState,
  homeState,
}: HomeScreenProps) {
  return (
    <Animated.View
      entering={FadeIn.duration(1000).delay(100)}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={[styles.titleText]}>The 49 Rays</Text>
      <Text
        style={[
          styles.titleText,
          { marginBottom: Dimensions.get("window").height * 0.15 },
        ]}
      >
        Of God
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          style={styles.button}
          onPress={() => setHomeState({ ...homeState, showCards: true })}
        >
          <Text style={styles.buttonText}>Browse Cards</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setHomeState({ ...homeState, showAuthorInfo: true })}
        >
          <Text style={styles.buttonText}>About the Author</Text>
        </Pressable>
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
    fontSize: 26,
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
    fontWeight: "bold",
    fontSize: 48,
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

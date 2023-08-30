import { Link } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { HomeState } from "../app";
import { AuthorInfo } from "../data/images";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

interface AuthorInfoScreenProps {
  setHomeState: React.Dispatch<React.SetStateAction<HomeState>>;
}

export default function AuthorInfoScreen({
  setHomeState,
}: AuthorInfoScreenProps) {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: Dimensions.get("window").height * 0.1,
          justifyContent: "center",
          alignItems: "center",
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
            shadowRadius: 8,
          }}
          onPress={() =>
            setHomeState({ showCards: false, showAuthorInfo: false })
          }
        >
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
        <Animated.View
          style={[styles.infoContainer]}
          entering={FadeIn.duration(1000).delay(100)}
        >
          <View style={styles.paragraphBg}>
            <Text style={styles.paragraph}>{AuthorInfo}</Text>
            <Link
              style={{
                color: "lightblue",
                fontFamily: "Cochin",
                fontSize: 18,
                textAlign: "center",
                marginTop: 20,
                textDecorationLine: "underline",
                shadowColor: "#000",
                shadowOpacity: 5,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 5,
              }}
              href="https://namasteconsciousness.com/"
            >
              namasteconsciousness.com
            </Link>
          </View>
        </Animated.View>
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
    fontSize: 26,
    fontFamily: "Cochin",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
  },
  paragraph: {
    color: "white",
    fontFamily: "Cochin",
    fontSize: 20,
    shadowColor: "#000",
    shadowOpacity: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    textAlign: "center",
    letterSpacing: 1,
  },
  paragraphBg: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: Dimensions.get("screen").height * 0.6,
    width: Dimensions.get("screen").width * 0.9,
    justifyContent: "center",
    borderRadius: 16,
    paddingHorizontal: 10,
  },
});

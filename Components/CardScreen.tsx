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
import { fontFamily } from "../utils/utils";
import CardCarousel from "./CardCarousel";

interface CardScreenProps {
  setHomeState: React.Dispatch<React.SetStateAction<HomeState>>;
  scrollX: any;
}

export default function CardScreen({ setHomeState, scrollX }: CardScreenProps) {
  return (
    <SafeAreaView>
      <CardCarousel scrollX={scrollX} />
      <View
        style={{
          paddingBottom: 20,
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
            shadowRadius: 2,
          }}
          onPress={() =>
            setHomeState({ showCards: false, showAuthorInfo: false })
          }
        >
          <Text style={styles.buttonText}>Back</Text>
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
});

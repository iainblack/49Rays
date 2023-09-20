import React, { useEffect } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { HomeState } from "../app";
import { globalStyles, normalize } from "../utils/utils";
import CardCarousel from "./CardCarousel";

interface CardScreenProps {
  setHomeState?: React.Dispatch<React.SetStateAction<HomeState>>;
  scrollX?: any;
  deviceType: string;
}

export default function CardScreen({ scrollX, deviceType }: CardScreenProps) {
  const [isShuffled, setIsShuffled] = React.useState<boolean>(false);
  const shuffleCount = React.useRef<number>(0);
  const spinValue = useSharedValue<number>(0);
  const flatListRef = React.useRef(null);

  return (
    <View
      style={{
        justifyContent: "space-around",
        width: Dimensions.get("window").width,
        height: "100%",
      }}
    >
      <View
        style={{
          paddingTop: Dimensions.get("window").height * 0.1,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={[
            styles.titleText,
            globalStyles.shadow,
            {
              fontSize: normalize(22, deviceType),
            },
          ]}
        >
          Browse the Deck
        </Text>
      </View>
      <CardCarousel
        scrollX={scrollX}
        spinValue={spinValue}
        flatListRef={flatListRef}
        shuffleCount={shuffleCount.current}
        isShuffled={isShuffled}
      />
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
          marginVertical: Dimensions.get("window").height * 0.05,
        }}
      >
        <Pressable
          style={[globalStyles.shadow]}
          onPress={() => (spinValue.value = spinValue.value ? 0 : 1)}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="rotate-360"
              size={deviceType === "phone" ? 32 : 40}
              color="white"
            />
            <Text
              style={[
                styles.buttonText,
                globalStyles.shadow,
                { fontSize: normalize(14, deviceType) },
              ]}
            >
              {"Flip All"}
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[globalStyles.shadow]}
          onPress={() => {
            shuffleCount.current += 1;
            setIsShuffled(!isShuffled);
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {isShuffled ? (
              <MaterialIcons
                name="replay"
                size={deviceType === "phone" ? 32 : 40}
                color="white"
              />
            ) : (
              <MaterialCommunityIcons
                name="shuffle-variant"
                size={deviceType === "phone" ? 32 : 40}
                color="white"
              />
            )}
            <Text
              style={[
                styles.buttonText,
                globalStyles.shadow,
                { fontSize: normalize(14, deviceType) },
              ]}
            >
              {isShuffled ? "Reset" : "Shuffle"}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
  },
  titleText: {
    color: "white",
  },
});

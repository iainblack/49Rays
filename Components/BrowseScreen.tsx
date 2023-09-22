import React, { MutableRefObject, useEffect } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text, View, Pressable, StyleSheet, Dimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { globalStyles, normalize } from "../utils/utils";
import CardCarousel from "./CardCarousel";
import CardStack from "./CardStack";
import { HomeTypes } from "../app";

interface BrowseScreenProps {
  homeState: HomeTypes;
  setHomeState: React.Dispatch<React.SetStateAction<HomeTypes>>;
  deviceType: string;
  setShowFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  frontCardId: MutableRefObject<number>;
  showBack: MutableRefObject<boolean>;
}

export default function BrowseScreen({
  homeState,
  setHomeState,
  deviceType,
  setShowFullScreen,
  frontCardId,
  showBack,
}: BrowseScreenProps) {
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
          paddingTop: Dimensions.get("window").height * 0.05,
          alignItems: "center",
          justifyContent: 'flex-start',
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
          {homeState === 1 ? "Browse the Deck" : "Daily Inspiration"}
        </Text>

        {homeState === 0 && (
          <Text
            style={[
              styles.subtitleText,
              globalStyles.shadow,
              {
                fontSize: normalize(14, deviceType),
                marginTop: 10,
              },
            ]}
          >
            {"Swipe to move through cards, tap to flip."}
          </Text>
        )}
      </View>
      {homeState === 1 && (
        <CardCarousel
          spinValue={spinValue}
          flatListRef={flatListRef}
          shuffleCount={shuffleCount.current}
          isShuffled={isShuffled}
        />
      )}
      {homeState === 0 && <CardStack deviceType={deviceType} frontCardId={frontCardId} showBack={showBack} />}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
          height: Dimensions.get('window').height * 0.1,
        }}
      >
        {homeState === 1 && (
          <BrowseButtons
            deviceType={deviceType}
            spinValue={spinValue}
            shuffleCount={shuffleCount}
            isShuffled={isShuffled}
            setIsShuffled={setIsShuffled}
          />
        )}
        {homeState === 0 && <StackButtons deviceType={deviceType} setShowFullScreen={setShowFullScreen} setHomeState={setHomeState} />}
      </View>
    </View>
  );
}

function BrowseButtons({
  deviceType,
  spinValue,
  shuffleCount,
  isShuffled,
  setIsShuffled,
}: {
  deviceType: string;
  spinValue: any;
  shuffleCount: MutableRefObject<number>;
  isShuffled: boolean;
  setIsShuffled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Pressable
        style={[globalStyles.shadow]}
        onPress={() => (spinValue.value = spinValue.value ? 0 : 1)}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={globalStyles.shadow}
            name="rotate-360"
            size={deviceType === "phone" ? 32 : 40}
            color="white"
          />
          <Text
            style={[
              styles.buttonText,
              globalStyles.shadow,
              { fontSize: normalize(14, deviceType), marginTop: 5 },
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
              style={globalStyles.shadow}
              name="replay"
              size={deviceType === "phone" ? 32 : 40}
              color="white"
            />
          ) : (
            <MaterialCommunityIcons
              style={globalStyles.shadow}
              name="shuffle-variant"
              size={deviceType === "phone" ? 32 : 40}
              color="white"
            />
          )}
          <Text
            style={[
              styles.buttonText,
              globalStyles.shadow,
              { fontSize: normalize(14, deviceType), marginTop: 5 },
            ]}
          >
            {isShuffled ? "Reset" : "Shuffle"}
          </Text>
        </View>
      </Pressable>
    </>
  );
}

function StackButtons({ deviceType, setShowFullScreen, setHomeState }: { deviceType: string, setShowFullScreen: React.Dispatch<React.SetStateAction<boolean>>, setHomeState: React.Dispatch<React.SetStateAction<HomeTypes>> }) {
  return (
    <><Pressable style={[globalStyles.shadow]} onPress={() => { setHomeState(1) }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <MaterialCommunityIcons
          style={globalStyles.shadow}
          name="view-array-outline"
          size={deviceType === "phone" ? 36 : 44}
          color="white" />
        <Text
          style={[
            styles.buttonText,
            globalStyles.shadow,
            { fontSize: normalize(14, deviceType), marginTop: 5 },
          ]}
        >
          {"Browse"}
        </Text>
      </View>
    </Pressable><Pressable style={[globalStyles.shadow]} onPress={() => { setShowFullScreen(true); }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            style={globalStyles.shadow}
            name="fullscreen"
            size={deviceType === "phone" ? 36 : 44}
            color="white" />
          <Text
            style={[
              styles.buttonText,
              globalStyles.shadow,
              { fontSize: normalize(14, deviceType), marginTop: 5 },
            ]}
          >
            {"Full screen"}
          </Text>
        </View>
      </Pressable></>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
  },
  titleText: {
    color: "white",
  },
  subtitleText: {
    color: "white",
  },
});

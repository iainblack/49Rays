import React from "react";
import { useSharedValue } from "react-native-reanimated";
import { data } from "../utils/images";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions, Pressable, Text, View } from "react-native";
import {
  PHONE_VIEW_SCREEN_WIDTH_COLLAPSED,
  PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED,
  globalStyles,
  TABLET_VIEW_SCREEN_WIDTH_COLLAPSED,
} from "../utils/utils";
import Card from "./Card";

interface CardStackProps {
  deviceType: string;
}

export default function CardStack({ deviceType }: CardStackProps) {
  const spinValue = useSharedValue<number>(0);
  const viewCount = 10;
  const { width, height } = Dimensions.get("window");

  const cardHeight =
    deviceType === "phone"
      ? PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED
      : TABLET_VIEW_SCREEN_WIDTH_COLLAPSED;

  const cardWidth =
    deviceType === "phone"
      ? PHONE_VIEW_SCREEN_WIDTH_COLLAPSED
      : TABLET_VIEW_SCREEN_WIDTH_COLLAPSED;

  return (
    <Carousel
      style={{
        width: width,
        height: cardHeight + height * 0.2,
        justifyContent: "center",
        alignItems: "center",
      }}
      width={cardWidth}
      height={cardHeight}
      pagingEnabled
      snapEnabled
      mode={"horizontal-stack"}
      data={data}
      windowSize={viewCount}
      modeConfig={{
        snapDirection: "left",
        stackInterval: 14,
      }}
      customConfig={() => ({ type: "positive", viewCount })}
      renderItem={({ item, index }) => (
        <View style={[globalStyles.cardShadow]}>
          <Card
            frontImage={item.frontImage}
            backImage={item.backImage}
            id={item.id}
          />
        </View>
      )}
    />
  );
}

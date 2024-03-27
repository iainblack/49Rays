import React, { MutableRefObject } from "react";
import { data } from "../utils/images";
import Carousel from "react-native-reanimated-carousel";
import { useWindowDimensions, View } from "react-native";
import {
  globalStyles,
  PHONE_VIEW_SCREEN_WIDTH_EXPANDED,
  TABLET_VIEW_SCREEN_WIDTH_EXPANDED,
  PHONE_VIEW_SCREEN_HEIGHT_EXPANDED,
  TABLET_VIEW_SCREEN_HEIGHT_EXPANDED,
} from "../utils/utils";
import Card from "./Card";

interface CardStackProps {
  deviceType: string;
  frontCardId: MutableRefObject<number>;
  showBack: MutableRefObject<boolean>;
}

export default function CardStack({ deviceType, frontCardId, showBack }: CardStackProps) {
  const viewCount = 20;
  const { width, height } = useWindowDimensions();


  const cardHeight =
    deviceType === "phone"
      ? PHONE_VIEW_SCREEN_HEIGHT_EXPANDED
      : TABLET_VIEW_SCREEN_HEIGHT_EXPANDED;

  const cardWidth =
    deviceType === "phone"
      ? PHONE_VIEW_SCREEN_WIDTH_EXPANDED
      : TABLET_VIEW_SCREEN_WIDTH_EXPANDED;

  const setShowBack = (show: boolean) => {
    showBack.current = show;
  };

  return (
    <Carousel
      style={{
        width: width,
        height: cardHeight + height * 0.2,
        justifyContent: "center",
        alignItems: "center",
      }}
      defaultIndex={frontCardId.current}
      width={cardWidth}
      height={cardHeight}
      pagingEnabled
      snapEnabled
      mode={"horizontal-stack"}
      data={data}
      windowSize={viewCount}
      onSnapToItem={(index) => {
        frontCardId.current = index;
      }}
      modeConfig={{
        snapDirection: "left",
        stackInterval: deviceType === "phone" ? 14 : 20,
      }}
      customConfig={() => ({ type: "positive", viewCount })}
      renderItem={({ item, index }) => (
        <View style={[globalStyles.cardShadow]}>
          <Card
            frontImage={item.frontImage}
            backImage={item.backImage}
            id={item.id}
            setShowBack={setShowBack}
          />
        </View>
      )}
    />
  );
}

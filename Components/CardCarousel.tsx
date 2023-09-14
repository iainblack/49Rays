import React, { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
  deviceTypeMap,
  PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED,
  PHONE_VIEW_SCREEN_WIDTH_COLLAPSED,
  TABLET_VIEW_SCREEN_HEIGHT_COLLAPSED,
  TABLET_VIEW_SCREEN_WIDTH_COLLAPSED,
} from "../utils/utils";
import Card, { CardProps } from "./Card";
import Animated from "react-native-reanimated";
import { getDeviceTypeAsync } from "expo-device";
import { data } from "../utils/images";

interface CardCarouselProps {
  scrollX: Animated.Value;
  spinValue: Animated.SharedValue<number>;
  flatListRef: React.RefObject<any>;
  shuffleCount: number;
  setShowShuffleOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CardDisplayData {
  deviceType: string;
  cardHeight: number;
  cardWidth: number;
}

interface itemProps extends CardProps {
  index: number;
  cardHeight: number;
  cardWidth: number;
}

const SRC_WIDTH = Dimensions.get("window").width;
const SPACING = SRC_WIDTH * 0.04;

function CarouselItem({
  frontImage,
  backImage,
  id,
  spinValue,
  cardHeight,
  cardWidth,
}: itemProps) {
  return (
    <Animated.View
      style={[
        {
          height: cardHeight,
          width: cardWidth,
          borderRadius: 16,
          marginHorizontal: SPACING,
        },
        styles.shadow,
      ]}
    >
      <Card
        frontImage={frontImage}
        backImage={backImage}
        id={id}
        spinValue={spinValue}
      />
    </Animated.View>
  );
}

export default function CardCarousel({
  spinValue,
  shuffleCount,
  setShowShuffleOverlay,
}: CardCarouselProps) {
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const [dataArray, setDataArray] = React.useState<CardProps[]>(data);
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const [cardDisplayData, setCardDisplayData] = React.useState<CardDisplayData>(
    {
      deviceType: "phone",
      cardHeight: PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED,
      cardWidth: PHONE_VIEW_SCREEN_WIDTH_COLLAPSED,
    }
  );

  useEffect(() => {
    getDeviceTypeAsync().then((deviceType) => {
      const thisDeviceType = deviceTypeMap[deviceType];
      const height =
        thisDeviceType === "phone"
          ? PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED
          : TABLET_VIEW_SCREEN_HEIGHT_COLLAPSED;
      const width =
        thisDeviceType === "phone"
          ? PHONE_VIEW_SCREEN_WIDTH_COLLAPSED
          : TABLET_VIEW_SCREEN_WIDTH_COLLAPSED;

      setCardDisplayData({
        ...cardDisplayData,
        deviceType: thisDeviceType,
        cardHeight: height,
        cardWidth: width,
      });
    });
  }, []);

  function shuffleDeck() {
    if (shuffleCount === 0) return;
    const shuffledData = dataArray.sort(() => Math.random() - 0.5);
    setShowShuffleOverlay(true);
    setDataArray(shuffledData);
    setRefresh(!refresh);
    setTimeout(() => {
      setShowShuffleOverlay(false);
    }, 1000);
  }

  useEffect(() => {
    shuffleDeck();
  }, [shuffleCount]);

  return (
    <Animated.View
      style={{
        height:
          cardDisplayData.cardHeight + Dimensions.get("window").height * 0.2,
        width: windowWidth,
      }}
    >
      <Animated.FlatList
        data={data}
        horizontal
        renderItem={({ item, index }) => {
          return (
            <CarouselItem
              frontImage={item.frontImage}
              backImage={item.backImage}
              id={item.id}
              index={index}
              spinValue={spinValue}
              cardHeight={cardDisplayData.cardHeight}
              cardWidth={cardDisplayData.cardWidth}
            />
          );
        }}
        initialNumToRender={5}
        keyExtractor={(item) => String(item.id)}
        snapToAlignment={"center"}
        snapToInterval={cardDisplayData.cardWidth + SPACING * 2}
        contentContainerStyle={{
          alignItems: "center",
        }}
        decelerationRate={"fast"}
        bounces={false}
        disableIntervalMomentum
        disableScrollViewPanResponder
        extraData={refresh}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    shadowColor: "#000",
  },
});

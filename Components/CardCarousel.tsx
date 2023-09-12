import { Image } from "expo-image";
import React, { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { data } from "../utils/images";
import {
  deviceTypeMap,
  PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED,
  PHONE_VIEW_SCREEN_HEIGHT_EXPANDED,
  PHONE_VIEW_SCREEN_WIDTH_COLLAPSED,
  PHONE_VIEW_SCREEN_WIDTH_EXPANDED,
  TABLET_VIEW_SCREEN_HEIGHT_EXPANDED,
  TABLET_VIEW_SCREEN_WIDTH_EXPANDED,
} from "../utils/utils";
import Card, { CardProps } from "./Card";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { getDeviceTypeAsync } from "expo-device";

interface CardCarouselProps {
  scrollX: Animated.Value;
  spinValue: Animated.SharedValue<number>;
  expandedView: boolean;
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
  expandedView: boolean;
}

const SRC_WIDTH = Dimensions.get("window").width;
const SPACING = SRC_WIDTH * 0.02;

function CarouselItem({
  frontImage,
  backImage,
  id,
  spinValue,
  cardHeight,
  cardWidth,
  expandedView,
}: itemProps) {
  return (
    <Animated.View
      style={[
        {
          height: cardHeight,
          width: expandedView ? Dimensions.get("window").width : cardWidth,
          borderRadius: 16,
          padding: expandedView ? 20 : 0,
          marginHorizontal: expandedView ? 0 : SPACING,
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
  expandedView,
}: CardCarouselProps) {
  const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
  const [scrollX, setScrollX] = React.useState(0);
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
          : TABLET_VIEW_SCREEN_HEIGHT_EXPANDED;
      const width =
        thisDeviceType === "phone"
          ? PHONE_VIEW_SCREEN_WIDTH_COLLAPSED
          : TABLET_VIEW_SCREEN_WIDTH_EXPANDED;

      setCardDisplayData({
        ...cardDisplayData,
        deviceType: thisDeviceType,
        cardHeight: height,
        cardWidth: width,
      });
    });
  }, []);

  useEffect(() => {
    if (expandedView) {
      window.scrollX = 0;
      const position =
        scrollX / (PHONE_VIEW_SCREEN_WIDTH_COLLAPSED + SPACING * 2);
      const newScrollX =
        position * (PHONE_VIEW_SCREEN_WIDTH_EXPANDED + SPACING * 2);
      setScrollX(newScrollX);

      setCardDisplayData({
        ...cardDisplayData,
        cardHeight: PHONE_VIEW_SCREEN_HEIGHT_EXPANDED,
        cardWidth: PHONE_VIEW_SCREEN_WIDTH_EXPANDED,
      });
    } else {
      setCardDisplayData({
        ...cardDisplayData,
        cardHeight: PHONE_VIEW_SCREEN_HEIGHT_COLLAPSED,
        cardWidth: PHONE_VIEW_SCREEN_WIDTH_COLLAPSED,
      });
    }
  }, [expandedView]);

  return (
    <Animated.View
      style={{
        height: expandedView
          ? windowHeight * 0.8
          : cardDisplayData.deviceType === "phone"
          ? windowHeight * 0.5
          : windowHeight * 0.8,
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
              expandedView={expandedView}
            />
          );
        }}
        initialNumToRender={5}
        keyExtractor={(item) => String(item.id)}
        onScroll={(e) => {
          setScrollX(e.nativeEvent.contentOffset.x);
        }}
        snapToAlignment={"center"}
        snapToInterval={
          expandedView ? windowWidth : cardDisplayData.cardWidth + SPACING * 2
        }
        contentContainerStyle={{
          alignItems: "center",
        }}
        decelerationRate={expandedView ? "fast" : "fast"}
        scrollEventThrottle={16}
        bounces={false}
        disableIntervalMomentum
        disableScrollViewPanResponder
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

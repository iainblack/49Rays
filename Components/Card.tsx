import { View, StyleSheet, Pressable, ImageSourcePropType } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image } from "expo-image";
import { useWindowDimensions } from "react-native";
import { DeviceType, getDeviceTypeAsync } from "expo-device";
import { deviceTypeMap } from "../utils/utils";

export interface CardProps {
  frontImage: ImageSourcePropType;
  backImage: ImageSourcePropType;
  blurHashFront?: string;
  blurHashBack?: string;
  id: number;
}

const Card = (props: CardProps) => {
  const { height, width } = useWindowDimensions();
  const [cardDimensions, setCardDimensions] = useState({
    height: height * 0.7,
    width: width * 0.95,
  });
  const spin = useSharedValue<number>(0);

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  useEffect(() => {
    getDeviceTypeAsync().then((deviceType) => {
      const thisDeviceType = deviceTypeMap[deviceType];
      if (thisDeviceType === "phone") {
        setCardDimensions({
          height: height * 0.7,
          width: width * 0.95,
        });
      } else if (thisDeviceType === "tablet") {
        setCardDimensions({
          height: height * 0.8,
          width: width * 0.8,
        });
      }
    });
  }, []);

  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 15,
      }}
    >
      <Pressable onPress={() => (spin.value = spin.value ? 0 : 1)}>
        <View>
          <Animated.View
            style={[
              Styles.front,
              rStyle,
              { height: cardDimensions.height, width: cardDimensions.width },
            ]}
          >
            <Image
              style={Styles.image}
              source={props.frontImage}
              placeholder={props.blurHashFront}
              transition={1000}
            />
          </Animated.View>
          <Animated.View
            style={[
              Styles.back,
              bStyle,
              { height: cardDimensions.height, width: cardDimensions.width },
            ]}
          >
            <Image
              style={Styles.image}
              source={props.backImage}
              placeholder={props.blurHashBack}
            />
          </Animated.View>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const Styles = StyleSheet.create({
  front: {
    borderRadius: 16,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  back: {
    borderRadius: 16,
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 16,
    resizeMode: "stretch",
  },
});

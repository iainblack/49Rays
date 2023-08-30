import { View, StyleSheet, Pressable, ImageSourcePropType } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image } from "expo-image";
import { Dimensions } from "react-native";

export interface CardProps {
  frontImage: ImageSourcePropType;
  backImage: ImageSourcePropType;
  blurHashFront?: string;
  blurHashBack?: string;
  id: number;
}

const Card = (props: CardProps) => {
  const spin = useSharedValue<number>(0);
  const { width, height } = Dimensions.get("window");

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

  return (
    <View>
      <Pressable onPress={() => (spin.value = spin.value ? 0 : 1)}>
        <View>
          <Animated.View
            style={[
              Styles.front,
              rStyle,
              { height: height * 0.6, width: width * 0.85 },
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
              { height: height * 0.6, width: width * 0.85 },
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
  },
});

import { View, StyleSheet, Pressable, ImageSourcePropType } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Image } from "expo-image";

export interface CardProps {
  frontImage?: ImageSourcePropType;
  backImage?: ImageSourcePropType;
  id: number;
  spinValue?: Animated.SharedValue<number>;
}

const Card = ({ spinValue, frontImage, backImage, id }: CardProps) => {
  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spinValue.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spinValue.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  if (!frontImage || !backImage) {
    return null;
  }

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* <Pressable onPress={() => (spinValue.value = spinValue.value ? 0 : 1)}> */}
      <View style={{ width: "100%", height: "100%" }}>
        <Animated.View style={[Styles.front, rStyle]}>
          <Image style={Styles.image} source={frontImage} transition={1000} />
        </Animated.View>
        <Animated.View style={[Styles.back, bStyle]}>
          <Image style={Styles.image} source={backImage} />
        </Animated.View>
      </View>
      {/* </Pressable> */}
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
    width: "100%",
    height: "100%",
  },
  back: {
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: 16,
    resizeMode: "stretch",
  },
});

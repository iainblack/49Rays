import { View, StyleSheet, Pressable, ImageSourcePropType } from "react-native";
import React from "react";
import Animated, {
  FadeIn,
  FadeOut,
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
  const singleSpinValue = useSharedValue<number>(0);

  const useSpinValue = spinValue ? spinValue : singleSpinValue;

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(useSpinValue.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(useSpinValue.value, [0, 1], [180, 360]);
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
      <Pressable
        onPress={() => {
          !spinValue && (useSpinValue.value = useSpinValue.value ? 0 : 1);
        }}
      >
        <View style={{ width: "100%", height: "100%" }}>
          <Animated.View
            style={[Styles.front, rStyle]}
            entering={FadeIn.duration(1000)}
          >
            <Image
              style={Styles.image}
              source={frontImage}
              transition={1000}
              contentFit={"fill"}
            />
          </Animated.View>

          <Animated.View
            style={[Styles.back, bStyle]}
            entering={FadeIn.duration(1000)}
          >
            <Image
              style={Styles.image}
              source={backImage}
              contentFit={"fill"}
              transition={1000}
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
    width: "100%",
    height: "100%",
  },
  back: {
    borderRadius: 16,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 16,
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

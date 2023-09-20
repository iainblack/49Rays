import { View, StyleSheet, Pressable, ImageSourcePropType } from "react-native";
import React, { MutableRefObject } from "react";
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
  setShowBack?: (show: boolean) => void;
  showBack?: boolean;
}

const Card = ({ spinValue, frontImage, backImage, showBack, setShowBack }: CardProps) => {
  const singleSpinValue = useSharedValue<number>(showBack ? 1 : 0);

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
          if (spinValue) { return; }
          if (useSpinValue.value === 0) {
            setShowBack ? setShowBack(true) : null;
            useSpinValue.value = 1;
          } else {
            setShowBack ? setShowBack(false) : null;
            useSpinValue.value = 0;
          }
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

import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { data as dataArray } from "../data/images";

interface BackgroundCarouselProps {
  scrollX: Animated.Value;
}

// TODO: rework this to use a custom scrollview instead of a flatlst which manually handles scroll position and data loading.
// something like this:

export default function BackgroundCarousel({
  scrollX,
}: BackgroundCarouselProps) {
  const [visibleData, setVisibleData] = useState(dataArray.slice(0, 3));
  const scrollViewRef = useRef(null);

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={() => {
          console.log("scrolling");
        }}
      >
        {dataArray.map((item, index) => {
          const inputRange = [
            (index - 1) * Dimensions.get("window").width,
            index * Dimensions.get("window").width,
            (index + 1) * Dimensions.get("window").width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              key={item.id}
              source={item.frontImage}
              blurRadius={50}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity,
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").height,
                },
              ]}
            />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}

// return (
// <View
//   style={[
//     StyleSheet.absoluteFillObject,
//     {
//       backgroundColor: "#000",
//     },
//   ]}
// >
//   <Animated.FlatList
// onScroll={Animated.event(
//   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//   { useNativeDriver: true }
//     )}
//     horizontal
//     pagingEnabled
//     data={data}
//     keyExtractor={(item) => String(item.id)}
//     initialNumToRender={50}
//     renderItem={({ item, index }) => {
//       const inputRange = [
//         (index - 1) * Dimensions.get("window").width,
//         index * Dimensions.get("window").width,
//         (index + 1) * Dimensions.get("window").width,
//       ];
//       const opacity = scrollX.interpolate({
//         inputRange,
//         outputRange: [0, 1, 0],
//       });

//       return (
// <Animated.Image
//   key={item.id}
//   source={item.frontImage}
//   blurRadius={50}
//   style={[
//     StyleSheet.absoluteFillObject,
//     {
//       opacity,
//       width: Dimensions.get("window").width,
//       height: Dimensions.get("window").height,
//     },
//   ]}
// />
//       );
//     }}
//   />
// </View>
// );
//}

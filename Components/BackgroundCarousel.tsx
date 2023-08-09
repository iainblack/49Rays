import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { data } from "../data/images";
import { CardProps } from "./Card";

interface BackgroundCarouselProps {
  scrollX: Animated.Value;
}

// TODO: rework this to use a custom scrollview instead of a flatlst which manually handles scroll position and data loading.
// something like this:

// const [data, setData] = useState([...]); // Your data array
//   const [visibleData, setVisibleData] = useState(data.slice(0, 3));
//   const scrollViewRef = useRef(null);

//   const handleScroll = (event) => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     const maxOffsetX =
//       event.nativeEvent.contentSize.width - event.nativeEvent.layoutMeasurement.width;
//     const nearEndThreshold = 100;

//     if (contentOffsetX >= maxOffsetX - nearEndThreshold) {
//       // Load more data when near the end of the content
//       const startIndex = visibleData.length;
//       const endIndex = startIndex + 3;
//       const newData = data.slice(startIndex, endIndex);
//       setVisibleData((prevData) => [...prevData, ...newData]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={handleScroll}
//       >
//         {visibleData.map((item) => (
//           <Image
//             key={item.id}
//             source={item.frontImage}
//             style={styles.backgroundImage}
//           />
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

export default function BackgroundCarousel({
  scrollX,
}: BackgroundCarouselProps) {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: "#000",
        },
      ]}
    >
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        data={data}
        keyExtractor={(item) => String(item.id)}
        initialNumToRender={50}
        renderItem={({ item, index }) => {
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
        }}
      />
    </View>
  );
}

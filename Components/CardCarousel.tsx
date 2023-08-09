import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { data } from "../data/images";
import Card from "./Card";

interface CardCarouselProps {
  scrollX: Animated.Value;
}

export default function CardCarousel({ scrollX }: CardCarouselProps) {
  return (
    <Animated.FlatList
      horizontal
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      data={data}
      pagingEnabled
      initialNumToRender={3}
      keyExtractor={(item) => String(item.id)}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get("window").width}
      renderItem={({ item }) => (
        <View key={item.id} style={styles.container}>
          <Card
            frontImage={item.frontImage}
            backImage={item.backImage}
            id={item.id}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
  },
});

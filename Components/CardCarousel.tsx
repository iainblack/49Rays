import React from "react";
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { data } from "../data/images";
import Card from "./Card";

interface CardCarouselProps {
  scrollX: Animated.Value;
}

export default function CardCarousel({ scrollX }: CardCarouselProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.FlatList
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={data}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        initialNumToRender={5}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: Dimensions.get("window").width,
  },
});

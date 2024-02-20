import React, { useState } from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { COLOR_VIOLET_CONTRAST_TEXT, COLOR_VIOLET_DARK, COLOR_VIOLET_LIGHT, COLOR_VIOLET_LIGHT_CONTRAST_TEXT, IconNames, normalize, rayData } from "../../utils/utils";
import IconHeader from "../IconHeader";
import Divider from "../Divider";

interface CardIndexProps {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  deviceType: string;
  navigateToCard: (cardId: number) => void;
}

interface RayIndexes {
  title: string;
  description?: string;
  deviceType?: string;
  cardId?: number;
  navigateToCard: (cardId: number) => void;
}

export default function CardIndex({
  setMenuIndex,
  deviceType,
  navigateToCard,
}: CardIndexProps) {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View
      entering={SlideInRight}
      style={{ height: "100%" }}
    >
      <IconHeader
        onClose={() => setMenuIndex(0)}
        deviceType={deviceType}
        iconName={IconNames.chevronLeft}
        alignLeft
      />
      <ScrollView style={{ height: "100%" }} bounces={false} showsVerticalScrollIndicator={false}>
        {rayData.map((rayIndex, index) => (
          <Row
            key={index}
            cardId={index + 1}
            title={rayIndex.title}
            description={rayIndex.description}
            deviceType={deviceType}
            navigateToCard={navigateToCard}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
}

function Row({ title, description, deviceType, navigateToCard, cardId }: RayIndexes) {
  return (
    <View style={styles.itemContainer}>
      <Text
        style={[
          styles.itemTitle,
          {
            fontSize: normalize(14, deviceType),
            flexWrap: "wrap",
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.itemContent,
          {
            flex: 1,
            fontSize: normalize(14, deviceType),
            flexWrap: "wrap",
          },
        ]}
      >
        {description}
      </Text>
      <Pressable onPress={() => navigateToCard(cardId)}>
        <View style={[styles.itemButton]}>
          <Text style={[{ fontSize: normalize(14, deviceType), color: 'white', alignSelf: 'center' }]}>View Card</Text>
        </View>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: "white",
    textAlign: 'left'
  },
  imageContainer: {
    height: "50%",
    width: "100%",
    borderRadius: 16,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },
  itemContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: COLOR_VIOLET_LIGHT,
    width: "100%",
    alignSelf: "center",
    borderRadius: 14,
    elevation: 8,
  },
  itemTouchable: {
    borderRadius: 14,
    overflow: "hidden",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLOR_VIOLET_LIGHT_CONTRAST_TEXT,
  },
  itemButton: {
    backgroundColor: COLOR_VIOLET_DARK,
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
  },
  itemContent: {
    marginTop: 10,
    fontSize: 14,
    color: COLOR_VIOLET_LIGHT_CONTRAST_TEXT,
  },
});


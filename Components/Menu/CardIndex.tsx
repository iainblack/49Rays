import React from "react";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { IconNames, normalize, rayData } from "../../utils/utils";
import IconHeader from "../IconHeader";
import Divider from "../Divider";

interface CardIndexProps {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
  deviceType: string;
}

interface RayIndexes {
  title: string;
  description?: string;
  deviceType?: string;
}

export default function CardIndex({
  setMenuIndex,
  deviceType,
}: CardIndexProps) {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutRight}
      style={{ height: "100%" }}
    >
      <IconHeader
        onClose={() => setMenuIndex(0)}
        deviceType={deviceType}
        iconName={IconNames.chevronLeft}
        alignLeft
      />
      <SafeAreaView>
        <View>
          <Text
            style={[
              styles.headerText,
              { fontSize: normalize(18, deviceType), marginBottom: 10 },
            ]}
          >
            Card Index
          </Text>
          <Divider />
          <ScrollView style={{ height: "90%" }} bounces={false}>
            {rayData.map((rayIndex, index) => (
              <Row
                key={index}
                title={rayIndex.title}
                description={rayIndex.description}
                deviceType={deviceType}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

function Row({ title, description, deviceType }: RayIndexes) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
      }}
    >
      <Text
        style={[
          {
            color: 'white',
            fontSize: normalize(14, deviceType),
            textDecorationLine: "underline",
          },
        ]}
      >
        {title}
        {description && `: `}
      </Text>
      {description && (
        <Text
          style={[
            styles.text,
            {
              flex: 1,
              fontSize: normalize(14, deviceType),
              flexWrap: "wrap",
            },
          ]}
        >
          {description}
        </Text>
      )}
    </View>
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
    fontWeight: '300',
    textAlign: 'left'
  },
  imageContainer: {
    height: "50%",
    width: "80%",
    borderRadius: 16,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 16,
  },
});


import React from "react";
import { useRef } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CardCarousel from "../components/CardCarousel";
import { AuthorInfo } from "../data/images";

interface HomeState {
  showCards: boolean;
  showAuthorInfo: boolean;
}

export default function Home() {
  const [homeState, setHomeState] = React.useState<HomeState>({
    showAuthorInfo: false,
    showCards: false,
  });

  const scrollX = useRef(new Animated.Value(0)).current;
  const blurHash = "LzIYw$WVWBof.AWCWYj[I9WVRkay";
  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <GestureHandlerRootView
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      <Image
        source={require("../assets/bg.jpg")}
        style={[StyleSheet.absoluteFillObject, styles.backgroundImage]}
        placeholder={blurHash}
        contentFit={"cover"}
      />
      {!homeState.showCards && !homeState.showAuthorInfo && (
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            opacity: fadeAnim,
          }}
        >
          <Text style={[styles.titleText]}>The 49 Rays</Text>
          <Text style={[styles.titleText, { marginBottom: 45 }]}>Of God</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 45,
            }}
          >
            <Pressable
              style={styles.button}
              onPress={() => setHomeState({ ...homeState, showCards: true })}
            >
              <Text style={styles.buttonText}>Browse Cards</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() =>
                setHomeState({ ...homeState, showAuthorInfo: true })
              }
            >
              <Text style={styles.buttonText}>About the Author</Text>
            </Pressable>
          </View>
        </Animated.View>
      )}
      {homeState.showCards && (
        <SafeAreaView>
          <View
            style={{
              paddingTop: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                shadowColor: "#000",
                shadowOpacity: 1,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 8,
              }}
              onPress={() =>
                setHomeState({ showCards: false, showAuthorInfo: false })
              }
            >
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>
          </View>
          <CardCarousel scrollX={scrollX} />
          <View
            style={{
              paddingBottom: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Cochin",
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              {" "}
              Swipe to scroll trough deck
            </Text>
            <Text
              style={{ color: "white", fontFamily: "Cochin", fontSize: 18 }}
            >
              {" "}
              Tap on card to flip
            </Text>
          </View>
        </SafeAreaView>
      )}
      {homeState.showAuthorInfo && (
        <SafeAreaView>
          <View
            style={{
              paddingTop: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                shadowColor: "#000",
                shadowOpacity: 1,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowRadius: 8,
              }}
              onPress={() =>
                setHomeState({ showCards: false, showAuthorInfo: false })
              }
            >
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>
            <View style={styles.infoContainer}>
              <View style={styles.paragraphBg}>
                <Text style={styles.paragraph}>{AuthorInfo}</Text>
                <Link
                  style={{
                    color: "lightblue",
                    fontFamily: "Cochin",
                    fontSize: 18,
                    textAlign: "center",
                    marginTop: 20,
                    textDecorationLine: "underline",
                    shadowColor: "#000",
                    shadowOpacity: 5,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowRadius: 5,
                  }}
                  href="https://namasteconsciousness.com/"
                >
                  namasteconsciousness.com
                </Link>
              </View>
            </View>
          </View>
        </SafeAreaView>
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  button: {
    backgroundColor: "transparent",
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 26,
    fontFamily: "Cochin",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleText: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 48,
    fontFamily: "Cochin",
    shadowColor: "#000",
    shadowOpacity: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 60,
  },
  paragraph: {
    color: "white",
    fontFamily: "Cochin",
    fontSize: 20,
    shadowColor: "#000",
    shadowOpacity: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    textAlign: "center",
    letterSpacing: 1,
  },
  paragraphBg: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: Dimensions.get("screen").height * 0.5,
    width: Dimensions.get("screen").width * 0.9,
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});

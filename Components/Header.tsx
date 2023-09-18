import React from "react";
import { Dimensions, View, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface HeaderProps {
  deviceType: string;
  setShowAboutOverlay?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  deviceType,
  setShowAboutOverlay,
  setShowMenu,
}: HeaderProps) {
  return (
    <View
      style={{
        zIndex: 1000,
        position: "absolute",
        top: Dimensions.get("window").height * 0.05,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        padding: Dimensions.get("window").width * 0.05,
      }}
    >
      <Pressable
        onPress={() => {
          setShowMenu(true);
        }}
      >
        <MaterialIcons
          name="menu"
          size={deviceType === "phone" ? 28 : 32}
          color="white"
        />
      </Pressable>
      <Pressable
        onPress={() => {
          setShowAboutOverlay(true);
        }}
      >
        <FontAwesome5
          name="question-circle"
          size={deviceType === "phone" ? 28 : 32}
          color="white"
        />
      </Pressable>
    </View>
  );
}

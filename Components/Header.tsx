import React from "react";
import { Dimensions, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../utils/utils";

interface HeaderProps {
  deviceType: string;
  setShowAboutOverlay?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  showAboutOverlay?: boolean;
  showMenu?: boolean;
}

export default function Header({
  deviceType,
  setShowAboutOverlay,
  setShowMenu,
  showAboutOverlay,
  showMenu,
}: HeaderProps) {
  return (
    <View
      style={{
        zIndex: 5,
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
          !showAboutOverlay && setShowMenu(true);
        }}
      >
        <MaterialIcons
          style={globalStyles.shadow}
          name="menu"
          size={deviceType === "phone" ? 28 : 32}
          color="white"
        />
      </Pressable>
      <Pressable
        onPress={() => {
          !showMenu && setShowAboutOverlay(true);
        }}
      >
        <FontAwesome5
          style={globalStyles.shadow}
          name="question-circle"
          size={deviceType === "phone" ? 28 : 32}
          color="white"
        />
      </Pressable>
    </View>
  );
}

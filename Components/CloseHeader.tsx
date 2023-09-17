import React from "react";
import { View, Pressable, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CloseHeaderProps {
  onClose: () => void;
  deviceType: string;
}

export default function CloseHeader({ onClose, deviceType }: CloseHeaderProps) {
  return (
    <View
      style={{
        zIndex: 1000,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        display: "flex",
        flexDirection: "row",
        padding: Dimensions.get("window").width * 0.05,
      }}
    >
      <Pressable
        onPress={() => {
          onClose();
        }}
      >
        <MaterialIcons
          name="close"
          size={deviceType === "phone" ? 28 : 32}
          color="white"
        />
      </Pressable>
    </View>
  );
}

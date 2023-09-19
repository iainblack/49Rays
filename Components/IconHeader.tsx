import React from "react";
import { View, Pressable, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles, IconNames } from "../utils/utils";

interface IconHeaderProps {
  onClose: () => void;
  deviceType: string;
  alignLeft?: boolean;
  iconName: IconNames;
}

export default function IconHeader({
  onClose,
  deviceType,
  alignLeft,
  iconName,
}: IconHeaderProps) {
  return (
    <View
      style={[
        {
          zIndex: 10,
          top: Dimensions.get("window").height * 0.01,
          width: "100%",
          alignItems: "center",
          justifyContent: alignLeft ? "flex-start" : "flex-end",
          display: "flex",
          flexDirection: "row",
          marginBottom: 30,
        },
      ]}
    >
      <Pressable
        onPress={() => {
          onClose();
        }}
      >
        <MaterialIcons
          name={iconName}
          size={deviceType === "phone" ? 28 : 32}
          color="white"
        />
      </Pressable>
    </View>
  );
}

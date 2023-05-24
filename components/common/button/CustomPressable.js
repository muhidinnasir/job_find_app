import React from "react";
import { StyleSheet, Pressable } from "react-native";

const CustomPressable = ({ style, children, ...props }) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) =>
        StyleSheet.flatten([{ opacity: pressed ? 0.6 : 1 }, style])
      }
    >
      {children}
    </Pressable>
  );
};

export default CustomPressable;

import React from "react";
import { View } from "react-native";

const AntBody = props => {
  return (
    <View
      style={style}
    >
      {props.children}
    </View>
  );
};

const style = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  margin: 5,
  alignItems: "flex-start"
};

export { AntBody };

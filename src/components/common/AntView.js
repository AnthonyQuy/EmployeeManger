import React from "react";
import { View } from "react-native";

const AntView = props => {
  return <View style={[style, props.style]}>{props.children}</View>;
};

const style = {
  display: "flex",
  flexDirection: "column",
  marginVertical: 10
};

export { AntView };

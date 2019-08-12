import React from "react";
import { Text, View } from "react-native";

const AntHeader = ({text}) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    marginTop: 30,
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { with: 0, height: 2 },
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    elevation: 2,
    position: "relative",
    marginBottom: 5
  }
};

export { AntHeader};

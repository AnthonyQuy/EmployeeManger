import React, { Component } from "react";
import { View } from "react-native";

class AntViewGroup extends Component {
  styles = {
    viewStyle: {
      margin: 5,
      padding:10,
      shadowColor: "#000000",
      shadowOffset: { with: 0, height: 1 },
      shadowOpacity: 0.8,
      borderWith: 3,
      borderRadius: 2,
      borderColor: "#000",
      backgroundColor: "#FFF"
    }
  };

  render() {
    return <View style={this.styles.viewStyle}>{this.props.children}</View>;
  }
}
export { AntViewGroup };

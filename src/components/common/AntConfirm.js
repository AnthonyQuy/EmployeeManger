import React, { Component } from "react";
import { Modal, Text, View } from "react-native";
import { AntView } from "./AntView";
import { AntButton } from "./AntButton";
import { AntViewGroup } from "./AntViewGroup";

export default class AntConfirm extends Component {
  render() {
    console.log("ANTCONFIRM", this.props);
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => {}}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AntViewGroup
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <AntView style={{}}>
              <Text>{this.props.message}</Text>
            </AntView>
            <AntView
              style={{
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <AntButton title="Confirm" onPress={this.props.onConfirm} />
              <AntButton title="Cancel" onPress={this.props.onCancel} />
            </AntView>
          </AntViewGroup>
        </View>
      </Modal>
    );
  }
}

import React from "react";
import { View, Picker } from "react-native";
import { AntView } from "../common/AntView";
import { Input, Text } from "react-native-elements";

export default class EmployeeInfo extends React.Component {
  render() {
    const employee = this.props.employee;
    return (
      <View>
        <AntView>
          <Input
            label={"Name"}
            placeholder={"Anthony"}
            value={employee.name}
            onChangeText={value => {
              this.props.onPropChange("name", value);
            }}
          />
        </AntView>
        <AntView>
          <Input
            label={"Phone"}
            placeholder={"88888888"}
            inputStyle = {"phone"}
            keyboardType={"number-pad"}
            autoCorrect={false}
            onChangeText={value => {
              this.props.onPropChange("phone", value);
            }}
            value={employee.phone}
          />
        </AntView>
        <AntView>
          <Text
            style={{
              marginHorizontal: 10,
              color: "#85939D",
              fontWeight: "bold",
              fontSize: 16
            }}
          >
            Shift
          </Text>
          <Picker
            selectedValue={employee.shift}
            onValueChange={value => this.props.onPropChange("shift", value)}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </AntView>
      </View>
    );
  }
}

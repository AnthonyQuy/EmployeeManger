import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import {
  onPropChange,
  clearFormData,
  updateEmployee,
  fireEmployee
} from "../../actions";
import { AntViewGroup } from "../../components/common/AntViewGroup";
import { AntButton } from "../../components/common/AntButton";
import { AntError } from "../../components/common/AntError";
import { text } from "react-native-communications";
import EmployeeInfo from "../../components/main/employee-info";
import _ from "lodash";
import AntConfirm from "../../components/common/AntConfirm";

class EmployeeUpdate extends React.Component {
  state = {
    showConfirmDialog: false
  };

  sendText(employee) {
    console.log("SEND TEXT - ", employee);
    text(employee.phone, `Your upcoming shift is on ${employee.shift}`);
  }

  componentDidMount() {
    _.each(this.props.passedData.data, (value, prop) => {
      this.props.onPropChange(prop, value);
    });
  }

  render() {
    console.log("EMPLOYEEUPDATE ", this.props);
    var employee = this.props.employee;
    return (
      <View>
        <AntViewGroup>
          <EmployeeInfo
            employee={employee}
            onPropChange={this.props.onPropChange}
          />
          <AntButton
            title={"Save"}
            onPress={() => {
              this.props.updateEmployee(
                this.props.passedData.employeeID,
                employee
              );
            }}
            loading={this.props.loading}
            disabled={this.props.loading}
          />
          <AntButton
            title={"Text Schedule"}
            onPress={() => {
              this.sendText(employee);
            }}
            loading={this.props.loading}
            disabled={this.props.loading}
          />
          <AntButton
            title={"Fire Employee"}
            onPress={() => {
              this.setState(() => ({
                showConfirmDialog: true
              }));
            }}
            loading={this.props.loading}
            disabled={this.props.loading}
          />
          <AntError errMessage={this.props.employee.errorMessage} />
        </AntViewGroup>
        <AntConfirm
          onConfirm={() => {
            console.log("FIRE EMPLOYEE: ", this.props.passedData.employeeID);
            this.setState(() => ({
              showConfirmDialog: false
            }));
            this.props.fireEmployee(this.props.passedData.employeeID);
          }}
          onCancel={() => {}}
          visible={this.state.showConfirmDialog}
          message="Are you sure you want to fire this employee?"
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { employee: state.updateEmployee, loading: state.common.loading };
}

export default connect(
  mapStateToProps,
  { onPropChange, clearFormData, updateEmployee, fireEmployee }
)(EmployeeUpdate);

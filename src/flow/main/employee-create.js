import React from "react";
import { connect } from "react-redux";
import { onPropChange, createEmployee, clearFormData } from "../../actions";
import { AntViewGroup } from "../../components/common/AntViewGroup";
import { AntButton } from "../../components/common/AntButton";
import { AntError } from "../../components/common/AntError";
import EmployeeInfo from "../../components/main/employee-info";

class EmployeeCreate extends React.Component {
  componentDidMount() {
    console.log("EMPOLOYEE DID MOUNTH - ", this.props);
    this.props.clearFormData();
  }

  render() {
    var employee = this.props.employee;
    return (
      <AntViewGroup>
        <EmployeeInfo
          employee={employee}
          onPropChange={this.props.onPropChange}
        />
        <AntButton
          title={"Create User"}
          onPress={() => {
            this.props.createEmployee({
              name: employee.name,
              phone: employee.phone,
              shift: employee.shift
            });
          }}
          loading={this.props.loading}
          disabled={this.props.loading}
        />
        <AntError errMessage={this.props.employee.errorMessage} />
      </AntViewGroup>
    );
  }
}

function mapStateToProps(state) {
  return { employee: state.updateEmployee, loading: state.common.loading };
}

export default connect(
  mapStateToProps,
  { onPropChange, createEmployee, clearFormData }
)(EmployeeCreate);

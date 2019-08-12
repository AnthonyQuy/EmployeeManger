import React from "react";
import { FlatList } from "react-native";
import { fetchEmployees } from "../../actions";
import { connect } from "react-redux";
import { ListItem } from "react-native-elements";
import { Actions } from "react-native-router-flux";

class EmployeeList extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <FlatList
        data={this.props.employeeArr}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => {
              Actions.employeeUpdate({ passedData: item });
            }}
            containerStyle={{
              borderBottomWidth: 1
            }}
            title={item.data.name}
            subtitle={item.data.phone}
          />
        )}
      />
    );
  }
}

function mapStateToProps(state) {
  return { employeeArr: state.employeeList.employeeArr };
}

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);

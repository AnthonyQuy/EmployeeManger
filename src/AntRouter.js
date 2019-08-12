import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./flow/authentication/login";
import EmployeeList from "./flow/main/employee-list";
import employeeCreate from "./flow/main/employee-create";
import employeeUpdate from "./flow/main/employee-update";

const AntRouter = () => {
  return (
    <Router>
      <Scene key={"root"} hideNavBar>
        <Scene initial key={"authentication"}>
          <Scene initial key={"login"} title={"Login"} component={LoginForm} />
        </Scene>
        <Scene key={"main"}>
          <Scene
            initial
            key={"employeeList"}
            title={"Employee"}
            component={EmployeeList}
            rightTitle={"Add"}
            onRight={() => {
              Actions.employeeCreate();
            }}
          />
          <Scene
            key={"employeeCreate"}
            title={"Create Employee"}
            component={employeeCreate}
          />
          <Scene
            key={"employeeUpdate"}
            title={"Update Employee"}
            component={employeeUpdate}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default AntRouter;

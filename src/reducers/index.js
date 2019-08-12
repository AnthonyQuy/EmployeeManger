import { combineReducers } from "redux";
import authenticate from "./rdc-authenticate";
import updateEmployee from "./rdc-updateEmployee";
import rdcCommon from "./rdc-common";
import rdcEmployeeList from "./rdc-employeeList";

export default combineReducers({
  credential: authenticate,
  updateEmployee: updateEmployee,
  common: rdcCommon,
  employeeList: rdcEmployeeList
});

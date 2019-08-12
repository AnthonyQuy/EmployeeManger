import {
  UPDATE_PROP,
  ACTION_FAIL,
  FETCH_EMPLOYEE,
  CLEAR_FORM_DATA
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { onLoading } from "./common";
import _ from "lodash";

export const fetchEmployees = () => {
  return dispath => {
    // console.log("fetchEmployees");
    var userID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`users/${userID}/employees`)
      .on("value", snapshot => {
        var employeeArr = _.map(snapshot.val(), (data, employeeID) => {
          return { employeeID, data };
        });
        // console.log(employeeArr);
        dispath(onFetchEmployees(employeeArr));
      });
  };
};

function onFetchEmployees(employeeArr) {
  return {
    type: FETCH_EMPLOYEE,
    payLoad: employeeArr
  };
}

export const onPropChange = (propName, value) => {
  return {
    type: UPDATE_PROP,
    payLoad: { propName, value }
  };
};

function onCreateEmployeeFail(errMessage) {
  return {
    type: ACTION_FAIL,
    payLoad: errMessage
  };
}

export function clearFormData() {
  console.log("CLEARFORMDATA")
  return {
    type: CLEAR_FORM_DATA
  };
}

export function createEmployee(employee) {
  // console.log("CREATE EMPLOYEE");
  // console.log(employee);
  return dispath => {
    dispath(onLoading(true));
    var userID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`users/${userID}/employees`)
      .push(employee, err => {
        if (err) {
          dispath(onCreateEmployeeFail(err.message));
          dispath(onLoading(false));
        } else {
          dispath(onLoading(false));
          Actions.pop();
        }
      });
  };
}

export function updateEmployee(employeeID, employee) {
  // console.log("UPDATE EMPLOYEE");
  // console.log(employeeID, employee);
  return dispath => {
    dispath(onLoading(true));
    var userID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`users/${userID}/employees/${employeeID}`)
      .set(employee, err => {
        if (err) {
          dispath(onCreateEmployeeFail(err.message));
          dispath(onLoading(false));
        } else {
          dispath(onLoading(false));
          Actions.pop();
        }
      });
  };
}

export function fireEmployee(employeeID) {
  return dispath => {
    dispath(onLoading(true));
    var userID = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`users/${userID}/employees/${employeeID}`)
      .remove(err => {
        if (err) {
          dispath(onCreateEmployeeFail(err.message));
          dispath(onLoading(false));
        } else {
          dispath(onLoading(false));
          Actions.pop();
        }
      });
  };
}

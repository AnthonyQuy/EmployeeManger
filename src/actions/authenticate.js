import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  LOGIN_SUCCESS,
  LOADING,
  LOGIN_FAIL
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { onLoading } from "./common";

const onEmailChange = email => {
  return {
    type: INPUT_EMAIL,
    payLoad: email
  };
};

const onPasswordChange = password => {
  return {
    type: INPUT_PASSWORD,
    payLoad: password
  };
};

const onLoginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payLoad: user
  };
};

const onLoginFail = err => {
  return {
    type: LOGIN_FAIL,
    payLoad: err
  };
};

const login = ({ email, password }) => {
  return dispath => {
    dispath(onLoading(true));
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispath(onLoginSuccess(user));
        dispath(onLoading(false));
        Actions.main();
      })
      .catch(err => {
        dispath(onLoginFail(err.message));
        dispath(onLoading(false));
      });
  };
};

export { onEmailChange, onPasswordChange, login };

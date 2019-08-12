import {
  ACTION_FAIL,
  CREATING_EMPLOYEE,
  UPDATE_PROP,
  LOAD_EMPLOYEE,
  CLEAR_FORM_DATA
} from "../actions/types";

const INIT_STATE = {
  name: "",
  phone: "",
  shift: "Monday",
  errorMessage: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_PROP:
      return { ...state, [action.payLoad.propName]: action.payLoad.value };
    case CREATING_EMPLOYEE:
      return { ...state };
    case ACTION_FAIL:
      return { ...state, errorMessage: action.payLoad };
    case LOAD_EMPLOYEE:
      return { ...state, ...action.payLoad };
    case CLEAR_FORM_DATA:
      return INIT_STATE;
    default:
      return state;
  }
};

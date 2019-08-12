import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from "../actions/types";

const INIT_STATE = {
  email: "",
  password: "",
  errorMessage: "",
  user: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case INPUT_EMAIL:
      return { ...state, email: action.payLoad };
    case INPUT_PASSWORD:
      return { ...state, password: action.payLoad };
    case LOGIN_FAIL:
      return { ...state, loading: false, errorMessage: action.payLoad };
    case LOGIN_SUCCESS:
      return { ...state, ...INIT_STATE, user: action.payLoad };
    default:
      return state;
  }
};

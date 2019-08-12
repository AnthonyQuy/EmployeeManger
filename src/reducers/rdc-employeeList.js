import { FETCH_EMPLOYEE } from "../actions/types";

const INIT_STATE = {
  employeeArr : []
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return { ...state, employeeArr: action.payLoad };
    default:
      return state;
  }
};

import { LOADING } from "../actions/types";

const INIT_STATE = {
    loading : false
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payLoad };
    default:
      return state;
  }
};

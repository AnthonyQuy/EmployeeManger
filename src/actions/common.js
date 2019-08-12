import { LOADING } from "./types";

export const onLoading = isLoading => {
  return {
    type: LOADING,
    payLoad: isLoading
  };
};

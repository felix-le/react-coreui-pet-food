import { SET_USER } from "./types";

const initialState = {
  data: "",
  loading: false,
  error: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    default:
      return state;
  }
};
export default reducers;

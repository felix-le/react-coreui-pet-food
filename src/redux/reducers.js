import { SET_USER, REMOVE_USER } from "./types";

const initialState = {
  data: "",
  visibleUsersApi: [],
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
    //------------------------------------------------------------

    case REMOVE_USER: {
      return {
        ...state,
        visibleUsersApi: state.visibleUsersApi.filter((user) => {
          return user.id !== action.payload.id;
        }),
      };
    }
    //------------------------------------------------------------

    default:
      return state;
  }
};
export default reducers;

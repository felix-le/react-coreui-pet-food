import { SET_USER, REMOVE_USER } from "./types";

const initialState = {
  data: "",
  visibleUsersRedux: [],
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
        visibleUsersRedux: state.visibleUsersRedux.filter((user) => {
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

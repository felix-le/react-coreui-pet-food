import { SET_USER, REMOVE_USER } from "./types";

export const setUser = (username, password) => ({
  type: SET_USER,
  payload: {
    id: Math.random(),
    username,
    password,
  },
});

export const removeUser = (id) => ({
  type: REMOVE_USER,
  payload: {
    id,
    loading: false,
  },
});

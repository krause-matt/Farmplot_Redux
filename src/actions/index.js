import { formValues } from "redux-form";
import rows from "../apis/rows"
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createRow = formValues => async dispatch => {
  rows.post("/rows", formValues)
};
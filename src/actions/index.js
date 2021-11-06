import { formValues } from "redux-form";
import rows from "../apis/rows"
import { SIGN_IN, SIGN_OUT, CREATE_ROW, GET_ROWS, GET_ROW, DELETE_ROW, EDIT_ROW } from "./types";

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

//asynchronous action creator
export const createRow = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await rows.post("/rows", {...formValues, userId});

  dispatch({
    type: CREATE_ROW,
    payload: response.data
  });

  
};

export const getRows = () => async dispatch => {
  const response = await rows.get("/rows");
  dispatch({
    type: GET_ROWS,
    payload: response.data
  });
};

export const getRow = (id) => async dispatch => {
  const response = await rows.get(`/rows/${id}`);
  dispatch({
    type: GET_ROW,
    payload: response.data
  });
};

export const deleteRow = (id) => async dispatch => {
  await rows.delete(`/rows/${id}`);
  dispatch({
    type: DELETE_ROW,
    payload: id
  });
};

export const editRow = (id, formValues) => async dispatch => {
  const response = await rows.put(`/rows/${id}`, formValues);
  dispatch({
    type: EDIT_ROW,
    payload: response.data
  });
};

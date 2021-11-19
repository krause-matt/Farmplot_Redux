import history from "../history";
import rows from "../apis/rows"
import { SIGN_IN, SIGN_OUT, CREATE_ROW, GET_ROWS, GET_ROW, DELETE_ROW, EDIT_ROW, CREATE_GARDEN, GET_GARDENS, GET_GARDEN, DELETE_GARDEN, EDIT_GARDEN } from "./types";

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

//asynchronous action creators - ROWS
export const createRow = (id, formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await rows.post(`/rows`, {...formValues, userId});

  dispatch({
    type: CREATE_ROW,
    payload: response.data,
    id: id
  });

  history.push(`/gardens/${id}/rows`);
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

  history.push("/");
};

export const deleteRowByGarden = (id) => async dispatch => {
  await rows.delete(`/rows/${id}`);
  dispatch({
    type: DELETE_ROW,
    payload: id
  });

  history.push("/");
};

export const editRow = (id, formValues) => async dispatch => {
  const response = await rows.patch(`/rows/${id}`, formValues);
  dispatch({
    type: EDIT_ROW,
    payload: response.data
  });

  history.push("/");
};


//asynchronous action creators - GARDENS
export const createGarden = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await rows.post("/gardens", {...formValues, userId});

  dispatch({
    type: CREATE_GARDEN,
    payload: response.data
  });

  history.push("/");
};

export const getGardens = () => async dispatch => {
  const response = await rows.get("/gardens");
  dispatch({
    type: GET_GARDENS,
    payload: response.data
  });
};

export const getGarden = (id) => async dispatch => {
  const response = await rows.get(`/gardens/${id}`);
  dispatch({
    type: GET_GARDEN,
    payload: response.data
  });
};

export const deleteGarden = (id) => async dispatch => {
  await rows.delete(`/gardens/${id}`);
  dispatch({
    type: DELETE_GARDEN,
    payload: id
  });

  history.push("/");
};

export const editGarden = (id, formValues) => async dispatch => {
  const response = await rows.patch(`/gardens/${id}`, formValues);
  dispatch({
    type: EDIT_GARDEN,
    payload: response.data
  });

  history.push("/");
};
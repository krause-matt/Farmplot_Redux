import {CREATE_ROW, GET_ROWS, GET_ROW, DELETE_ROW, EDIT_ROW} from "../actions/types";
import _ from "lodash";

export default (state={}, action) => {
  switch(action.type) {
    case GET_ROWS:
      return {...state, ..._.mapKeys(action.payload, "id")};
    case GET_ROW:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_ROW:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_ROW:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_ROW:
      return _.omit(state, action.payload);
    default:
      return state;
  };
};
import {CREATE_GARDEN, GET_GARDENS, GET_GARDEN, DELETE_GARDEN, EDIT_GARDEN, CREATE_ROW} from "../actions/types";
import _ from "lodash";
import rowReducer from "./rowReducer";

export default (state={}, action) => {
  switch(action.type) {
    case GET_GARDENS:
      return {...state, ..._.mapKeys(action.payload, "id")};
    case GET_GARDEN:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_GARDEN:
      return {...state, [action.payload.id]: action.payload};
    case CREATE_ROW:
      return {...state, row: rowReducer(state.rows, action)}
    case EDIT_GARDEN:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_GARDEN:
      return _.omit(state, action.payload);
    default:
      return state;
  };
};
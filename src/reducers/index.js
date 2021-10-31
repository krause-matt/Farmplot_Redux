import { combineReducers } from "redux";
import googleAuthReducer from "./googleAuthReducer";

export default combineReducers({
  auth: googleAuthReducer
});
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import googleAuthReducer from "./googleAuthReducer";
import rowReducer from "./rowReducer";

export default combineReducers({
  auth: googleAuthReducer,
  form: formReducer,
  rows: rowReducer
});
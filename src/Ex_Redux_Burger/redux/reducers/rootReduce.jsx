import { combineReducers } from "redux";
import { burgerReducer } from "./burger_Reducer";

export const rootReducer = combineReducers({
  burgerReducer: burgerReducer,
});

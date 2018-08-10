import { combineReducers } from "redux";

import { todoReducer } from "./todoReducer";
import { weatherReducer } from './weatherReducer'

const rootReducer = combineReducers({
  todoReducer,
  weatherReducer,
});

export default rootReducer;

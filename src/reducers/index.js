import { combineReducers } from "redux";

import { todoReducer } from "./todoReducer";
import { weatherReducer, itemsIsLoading, itemsIsLoaded } from './weatherReducer'

const rootReducer = combineReducers({
  todoReducer,
  weatherReducer,
  itemsIsLoading,
  itemsIsLoaded
});

export default rootReducer;

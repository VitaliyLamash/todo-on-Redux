import * as appTypes from "../types/appTypes";

export const addTodo = todo => {
  return {
    type: appTypes.ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  return {
    type: appTypes.DELETE_TODO,
    payload: id
  };
};

export const checkTodo = id => {
  return {
    type: appTypes.CHECK_TODO,
    payload: id
  };
};

export const showTodo = text => {
  return {
    type: appTypes.SHOW_TODO,
    payload: text
  };
};

export const changeTodo = (payload) => {
  return {
    type: appTypes.CHANGE_TODO,
    payload
  }
}
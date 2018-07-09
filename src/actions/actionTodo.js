import * as appTypes from "../types/appTypes";

export const addTodo = todo => {
  console.log("actions_create - addTodo = ", todo);
  return {
    type: appTypes.ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  console.log("action_create - deleteTodo = ", id);
  return {
    type: appTypes.DELETE_TODO,
    payload: id
  };
};

export const checkTodo = id => {
  console.log("action_create - checkTodo = ", id);
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

import * as appTypes from "../types/appTypes";

const initialState = {
  show: "all",
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todo: action.payload.todo,
            id: action.payload.id
          }
        ]
      };
    case appTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case appTypes.CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map(list => {
          if (list.id === action.payload) {
            list.checked = !list.checked;
          }
          return list;
        })
      };
    case appTypes.SHOW_TODO:
      return { ...state, show: action.payload };

    case appTypes.CHANGE_TODO:
      return {
        ...state,
        todos: state.todos.map(list => {
          if (list.id === action.payload.id) {
            list.todo = action.payload.text;
          }
          return list;
        })
      };
    default:
      return state;
  }
};

// reselect

import React from "react";

export const List = props => {
  const allList = props.todos.map(todo => {
    return (
      <li key={todo.id}>
        {todo.todo}
        <input type="checkbox" onChange={() => props.handleChecked(todo.id)} />
        <button onClick={() => props.handleDelete(todo.id)}>Delete</button>
      </li>
    );
  });

  const checkedList = props.todos.map(todo => {
    if (todo.checked === true) {
      return (
        <li key={todo.id}>
          {todo.todo}
          <input
            type="checkbox"
            onChange={() => props.handleChecked(todo.id)}
          />
          <button onClick={() => props.handleDelete(todo.id)}>Delete</button>
        </li>
      );
    }
  });

  return <ul>{props.typeShow === "all" ? allList : checkedList}</ul>;
};

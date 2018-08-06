import React from "react";
import styled from "styled-components";

export const List = ({ todos, handleChecked, handleDelete, typeShow }) => {
  const listTodo = todos.map(todo => {
    if (typeShow === "all") {
      return (
        <li key={todo.id}>
          {todo.todo}
          <input type="checkbox" onChange={() => handleChecked(todo.id)} />
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      );
    } else if (todo.checked === true) {
      return (
        <li key={todo.id}>
          {todo.todo}
          <input type="checkbox" onChange={() => handleChecked(todo.id)} />
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      );
    }
  });

  return (
    <ListTodo todos={todos}>

      {listTodo}

    </ListTodo>
  );
};

const ListTodo = styled.ul`
  // border: ${props => (props.todos.length > 0 ? "3px solid red" : "0px")};
  max-width: 1100px;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;

  & li {
    align-items: flex-end;
    box-shadow: 5px 10px 10px rgba(0,0,0,0.15);
    border: 1px solid rgba(0,0,0,0.15);
    margin: 10px;
    width: 200px;
    height: 200px;
    background-color: #fff2bf;
    font-size: 14px;
    margin: 15px;
    transform: rotate(-27deg);
    word-wrap: break-word;
  }
`;

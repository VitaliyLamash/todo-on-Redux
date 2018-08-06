import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme-context";

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
      <ButtonHallo>HALLO</ButtonHallo>
      <ThemeContext.Consumer>
        {theme => (
          <button style={{ backgroundColor: theme.background }}>
            something
          </button>
        )}
      </ThemeContext.Consumer>
    </ListTodo>
  );
};

const ListTodo = styled.ul`
  border: ${props => (props.todos.length > 0 ? "3px solid red" : "0px")};
  padding: 10px;
  & li {
    background-color: #fffecc;
    font-size: 16px;
    border-radius: 15px;
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
  }
`;
const ButtonHallo = styled.button`
  background-color: red;
`;

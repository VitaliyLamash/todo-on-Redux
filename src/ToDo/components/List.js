import React from "react";
import styled from "styled-components";
import background from '../../pictures/background.png';

export const List = ({ todos, handleChecked, handleDelete, typeShow }) => {
	const listTodo = todos.map(todo => {
		if (typeShow === "all") {
		return (
				<Item key={todo.id} onClick={() => handleChecked(todo.id)} checked={todo.checked}>
					{todo.todo}
					<DeleteButton onClick={() => handleDelete(todo.id)}>X</DeleteButton>
				</Item>
		);
		} else if (todo.checked === true) {
			return (
				<Item key={todo.id} onClick={() => handleChecked(todo.id)} checked={todo.checked}>
					{todo.todo}
					<DeleteButton onClick={() => handleDelete(todo.id)}>X</DeleteButton>
				</Item>
			);
		}
	});
	return (
		<ListTodo todos={todos} back={background}>
			{listTodo}
		</ListTodo>
	);
};

const ListTodo = styled.ul`
  max-width: 1100px;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-image: url( ${props => (props.back)} );
  justify-content: center;
`;
const Item = styled.li` 
	position: relative;
	cursor: pointer;
	background-color: ${props => (props.checked ? '#FFD89E' : '#fff2bf')};
	margin: ${props => (props.checked ? '15px' : '10px')};
	width: ${props => (props.checked ? `230px` : '200px')};
	height: ${props => (props.checked ? '270px' : '200px')};
	transform: ${props => (props.checked ? '0' : 'rotate(-7deg)')};
	transition: ${props => (props.checked ? '1s' : '1s')};
	overflow: ${props => (props.checked ? 'auto' : `hidden`)};
	box-shadow: 5px 10px 10px rgba(0,0,0,0.15);
	border: 1px solid rgba(0,0,0,0.15);
	font-size: 14px;
	margin: 15px;
	word-wrap: break-word;
	padding: 25px 10px 10px 10px;
`;
const DeleteButton = styled.button`
	position: absolute;
	top: 0%;
	right: 0%;
	z-index: 999;
	background-color: inherit;
	border-radius: 50px;
	font-weight: 800;

`
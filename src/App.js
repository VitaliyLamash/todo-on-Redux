import React, { Component } from "react";
import MainPage from "./MainPage/containers/MainPage";
import ToDo from "./ToDo/containers/ToDo";
import Weather from "./Weather/containers/Weather";
import { Route, Link } from "react-router-dom";

import { ThemeContext, themes } from "./theme-context";
import styled from "styled-components";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: themes.light
		};
	}
	render() {
		return (
			<div className="container">
				<List>
					<Point>LOGO</Point>
					<Point>
						<Link to="/">MainPage</Link>
					</Point>
					<Point>
						<Link to="/ToDo">ToDo</Link>
					</Point>
					<Point>
						<Link to="/Weather">Weather</Link>
					</Point>
				</List>
				<Route exact path="/" component={MainPage} />
				<ThemeContext.Provider value={this.state.theme}>
					<Route path="/Todo" component={ToDo} />
				</ThemeContext.Provider>
				<Route path="/Weather" component={Weather} />
			</div>
		);
	}
}

const List = styled.ul`
display: flex;
justify-content: flex-end;
height: 50px;
width: 100%;
margin-top: 15px;
margin-bottom: 15px;
background-color: #2E2E2E;
`;

const Point = styled.li`
	border-right: 2px solid black;
	width: 150px;
	height: 100%;
	display:flex;
	justify-content: center;
	flex-direction: column;
	border-bottom: 4px solid transparent; 
&:first-child{
	color: white;
	border: 0;
	margin-right: auto;
	text-align: center;
	border-bottom: 4px solid transparent; 
	font-size: 20px;
	font-weight: 600;
}
&:nth-child(2){
	border-left: 2px solid black;
}
&:hover{
	border-bottom: 4px solid #58c93a;
	transition: 1s;
}
a:hover{
	color: #58c93a;
	transition: 1s;
}
  a {
	display:flex;
	justify-content: center;
	font-size: 20px;
	font-weight: 600;
	text-decoration:none;
	color: #fff;

 }
`;

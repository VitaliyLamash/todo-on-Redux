import React, { Component } from "react";
import { InputForm } from "../components/InputFom";
import { List } from "../components/List";
import { StateButtons } from "../components/StateButtons";
import { ChangeTodo } from "../components/ChangeTodo";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as appActions from "../../actions/actionTodo";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      valueText: "",
      newValue: "",
      todoId: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.value) return;
    this.props.addTodo({ todo: this.state.value, id: Date.now() });
    this.setState({ value: "" });
  };

  handleChangeTodo = event => {
    this.setState({ newValue: event.target.value });
  };
  handleSubmitTodo = event => {
    event.preventDefault();
    console.log(this.state.newValue);
    this.props.changeTodo({ text: this.state.newValue, id: this.state.todoId });
    this.setState({ newValue: "" });
    this.setState({ valueText: "" });
  };
  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  handleChecked = id => {
    this.props.checkTodo(id);
  };

  hanleShow = (text = "all") => {
    this.props.showTodo(text);
  };
  changeTodo = (todoText, id) => {
    this.setState({
      valueText: todoText,
      todoId: id
    });
  };

  render() {
    return (
      <div>
        <InputForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
        <StateButtons
          hanleShow={this.hanleShow}
          typeShow={this.props.typeShow}
        />
        <List
          todos={this.props.todos}
          typeShow={this.props.typeShow}
          handleDelete={this.handleDelete}
          handleChecked={this.handleChecked}
          changeTodo={this.changeTodo}
        />
        <ChangeTodo
          valueText={this.state.valueText}
          newValue={this.newValue}
          handleChangeTodo={this.handleChangeTodo}
          handleSubmitTodo={this.handleSubmitTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    typeShow: state.todoReducer.show
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(appActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);

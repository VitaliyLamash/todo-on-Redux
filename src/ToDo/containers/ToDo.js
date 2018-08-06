import React, { Component } from "react";
import { InputForm } from "../components/InputFom";
import { List } from "../components/List";
import { StateButtons } from "../components/StateButtons";
import { connect } from "react-redux";
import {
  addTodo,
  deleteTodo,
  checkTodo,
  showTodo
} from "../../actions/actionTodo";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
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

  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  handleChecked = id => {
    this.props.checkTodo(id);
  };

  hanleShow = (text = "all") => {
    this.props.showTodo(text);
  };

  render() {
    return (
      <div className="App">
        {InputForm({
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          value: this.state.value
        })}
        {StateButtons({ hanleShow: this.hanleShow })}
        {List({
          todos: this.props.todos,
          typeShow: this.props.typeShow,
          handleDelete: this.handleDelete,
          handleChecked: this.handleChecked
        })}
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

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodo(todo));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    },
    checkTodo: id => {
      dispatch(checkTodo(id));
    },
    showTodo: text => {
      dispatch(showTodo(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);

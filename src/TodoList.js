import React, { Component, Fragment } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import "./App.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={input => {
              this.input = input;
            }}
          />{" "}
          <button onClick={this.handleBtnClick}>submit</button>{" "}
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  componentDidMount() {
    axios
      .get("todolist.json")
      .then(res => {
        console.log(res.data);
        this.setState(() => {
          return { list: res.data };
        });
      })
      .catch(() => {
        alert("error");
      });
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      );
    });
  }
  handleInputChange(e) {
    const value = e.target.value;

    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
  }

  handleItemDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}

export default TodoList;

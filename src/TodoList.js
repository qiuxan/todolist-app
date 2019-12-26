import React, { Component, Fragment } from "react";
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

  //excute at the moment the components will be loaded to the page
  componentWillMount() {
    console.log("componentwillmount");
  }
  render() {
    console.log("render");
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

  //excude when page finished loading
  componentDidMount() {
    console.log("componentDidMount");
  }
  //excute before updating component
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
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
  handleInputChange() {
    const value = this.input.value;

    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState(
      prevState => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }),
      () => {
        console.log(this.ul.querySelectorAll("div").length);
      }
    );
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

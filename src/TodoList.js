import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import TodoListUI from "./TodoListUI";
import axios from "axios";

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitList
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState());
    /* store.getState() help to get the state from the store and the store get it from the reducer */

    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // console.log(action);
    // axios.get("/list.json").then(res => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // });
    // console.log(action);
    // axios.get("/list.json").then(res => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // });
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;

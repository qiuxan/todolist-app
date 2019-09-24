import React, { Component, Fragment } from "react";

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input type="text" /> <button>submit</button>{" "}
        </div>
        <ul>
          <li>learing english</li>
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;

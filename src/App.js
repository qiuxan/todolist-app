import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.handleAddItem = this.handleAddItem.bind(this);
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                in={this.state.show}
                timeout={1000}
                classNames="fade"
                appear={true}
                onEntered={el => {
                  el.style.color = "blue";
                }}
              >
                <div>item</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>

        <button onClick={this.handleAddItem}>Toggle</button>
      </Fragment>
    );
  }
  handleAddItem() {
    this.setState(prevState => {
      return { list: [...prevState.list, "item"] };
    });
  }
}
export default App;

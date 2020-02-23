import React from "react";
import { connect } from "react-redux";

const TodoList = props => {
  const {
    inputValue,
    list,
    changeInputValue,
    handleClick,
    handleDelete
  } = props;
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>Submit</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li onClick={() => handleDelete(index)} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// class TodoList extends Component {
//   render() {

//   }
// }

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToPros = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: "add_item"
      };
      dispatch(action);
    },
    handleDelete(index) {
      const action = {
        type: "delete_item",
        number: index
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToPros)(TodoList);

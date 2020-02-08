const defaultState = {
  inputValue: "",
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    // console.log(action);
    const copyState = JSON.parse(JSON.stringify(state));
    copyState.inputValue = action.value;
    return copyState;
  }

  if (action.type === "add_todo_item") {
    console.log(action);
    const copyState = JSON.parse(JSON.stringify(state));
    copyState.list.push(state.inputValue);
    copyState.inputValue = "";
    return copyState;
  }

  if (action.type === "delete_todo_item") {
    console.log(action);
    const copyState = JSON.parse(JSON.stringify(state));
    copyState.list.splice(action.index, 1);
    return copyState;
  }

  return state;
};

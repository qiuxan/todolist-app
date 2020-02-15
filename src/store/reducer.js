import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionType";

const defaultState = {
  inputValue: "",
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // console.log(action);
    const copyState = JSON.parse(JSON.stringify(state));
    copyState.inputValue = action.value;
    return copyState;
  }

  if (action.type === INIT_LIST_ACTION) {
    const copyState = JSON.parse(JSON.stringify(state));
    copyState.list = action.data;
    return copyState;
  }

  if (action.type === ADD_TODO_ITEM) {
    console.log(action);
    const copyState = JSON.parse(JSON.stringify(state));
    copyState.list.push(state.inputValue);
    copyState.inputValue = "";
    return copyState;
  }

  if (action.type === DELETE_TODO_ITEM) {
    const copyState = JSON.parse(JSON.stringify(state));
    copyState.list.splice(action.index, 1);
    return copyState;
  }

  return state;
};

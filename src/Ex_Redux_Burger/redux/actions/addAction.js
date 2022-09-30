import { ADD_ACTION } from "../constants/addConstant";

export let addAction = (name, value) => {
  return {
    type: ADD_ACTION,
    payload: { name: name, value: value },
  };
};

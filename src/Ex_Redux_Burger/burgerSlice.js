import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "beef", quatity: 1, price: 10 },
  { id: 2, name: "cheese", quatity: 1, price: 15 },
  { id: 3, name: "salad", quatity: 1, price: 20 },
];

export const burgerSlice = createSlice({
  name: "burgerReducer",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      console.log("action: ", action);
      console.log("state: ", state);
      let { name, value } = action.payload;
      console.log("value: ", value);
      console.log("name: ", name);
      const currentEle = state.find((item) => item.name === name);
      console.log("currentEle: ", currentEle);
      currentEle.quatity += value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addComponent } = burgerSlice.actions;

export default burgerSlice.reducer;

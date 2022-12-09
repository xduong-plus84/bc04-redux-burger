import { ADD_ACTION } from "../constants/addConstant";

let initialState = {
  //   beef: { quantity: 1, price: 10 },
  //   cheese: { quantity: 2, price: 15 },
  //   salad: { quantity: 1, price: 20 },
  burgerMaterial: [
    { name: "beef", quatity: 1, price: 10 },
    { name: "cheese", quatity: 1, price: 15 },
    { name: "salad", quatity: 1, price: 20 },
  ],
};

export let burgerReducer = (state = initialState, action) => {
  let { type, name, value } = action;

  switch (type) {
    case ADD_ACTION: {
      let burgerMaterialClone = [...state.burgerMaterial];
      //   console.log(action);

      let index = burgerMaterialClone.findIndex((item) => item.name === name);
      burgerMaterialClone[index].quatity += value;
      if (burgerMaterialClone[index].quatity < 0) {
        burgerMaterialClone[index].quatity = 0;
      }
      state.burgerMaterial = burgerMaterialClone;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

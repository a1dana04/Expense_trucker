const initialState = {
  expenses: 0,
  cush: 500,
  product:[]
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {...state,product: [...state.product, action.payload]}
    case "EXPENSES_BAY":
      return {
        ...state,
        cush:
          state.cush < action.payload || action.payload < 0
            ? state.cush
            : state.cush - action.payload,
        expenses:
          state.cush < action.payload || action.payload < 0
            ? state.expenses
            : state.expenses + action.payload,
      };
    default:
      return state;
  }
};

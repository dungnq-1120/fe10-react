import { Counter } from "../action/constants";
import { TAction } from "../types";

const initialState = { value: 0, loading: true };

function productsReducer(state = initialState, action: TAction) {
  switch (action.type) {
    case Counter.INCREMENTED:
      return { ...state, value: state.value + 2 };
    case Counter.DECREMENTED:
      return { ...state, value: state.value - 2 };
    default:
      return state;
  }
}

export default productsReducer;

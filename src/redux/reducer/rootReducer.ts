import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productsReducer from "./product.reducer";

const reducer = combineReducers({
  counter: counterReducer,
  products: productsReducer,
});

export default reducer;

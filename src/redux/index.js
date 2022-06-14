import { createStore, combineReducers } from "redux";
import {ProductsReducer} from "./ProductsReducer";
import {CardsReducer} from "./CardsReducer";
const allReducers = combineReducers({
  ProductsReducer: ProductsReducer,
  CardsReducer: CardsReducer,
});

const Mystore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Mystore;

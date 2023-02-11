import { createStore } from "redux";
import productReducer from "./reducers/ProductReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(productReducer, composeWithDevTools());

export default store;

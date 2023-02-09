import { createStore } from "redux";
import productReducer from "./reducers/ProductReducer";

const store = createStore(productReducer);

export default store;

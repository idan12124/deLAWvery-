import { createStore } from "redux";
import cardListReducer from "./reducers/CardListReducer";

const store = createStore(
  cardListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./rootReducer";

const store: ReturnType<typeof createStore> = createStore(
  reducers,
  compose(composeWithDevTools())
);

export default store;

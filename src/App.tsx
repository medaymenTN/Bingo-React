import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import BingoBoardContainer from "./containers/bingoBoardContainer/bingoBoardContainer";

function App() {
  return (
    <Provider store={store}>
      <BingoBoardContainer />
    </Provider>
  );
}

export default App;

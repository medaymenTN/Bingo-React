import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import BingoBoardContainer from "./containers/bingoBoardContainer/bingoBoardContainer";
import ScoreBoardContainer from "./containers/scoreBoardContainer/scoreBoardContainer";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <Grid container direction="row">
        <Grid container md={6} xs={12}>
          <ScoreBoardContainer />
        </Grid>
        <Grid container md={6} xs={12}>
          <BingoBoardContainer />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;

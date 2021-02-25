import { combineReducers, CombinedState } from "redux";
import { Reducer } from "redux";

import bingoReducer from "./bingoStore/bingo.reducer";

const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  bingo: bingoReducer,
});

export default reducers;

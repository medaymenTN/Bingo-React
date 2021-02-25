import { ActionType } from "typesafe-actions";
import * as actions from "./bingo.action.creators";

type IBingoBoardState = {
  possibleValidWinnerRows: any;
  firstPlayerCurrentCheckedCells: string[];
  secondPlayerCurrentCheckedCells: string[];
  winner: string;
};

type IBingoActionType = ActionType<typeof actions>;

export { IBingoBoardState, IBingoActionType };

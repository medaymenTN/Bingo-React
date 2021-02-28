import generateValueFromData from "../../utils/generateValueFromData";
import {ActionTypes,Player} from "./action.enum";
import { IBingoBoardState, IBingoActionType } from "./types";

const INITIAL_STATE: IBingoBoardState = {
  firstPlayerCurrentCheckedCells: [],
  possibleValidWinnerRows: [],
  secondPlayerCurrentCheckedCells: [],
  winner: "",
  currentPlayerRound:Player.FIRST_PLAYER,
  valueFromCurrentBingo:generateValueFromData([])
};
/**
 *
 * @param state
 * @param action
 */
const bingoReducer = (
  state = INITIAL_STATE,
  action: IBingoActionType
): IBingoBoardState => {
  switch (action.type) {
    case ActionTypes.GENERATE_WINNER_COMBINATION:
      return { ...state, possibleValidWinnerRows: action.payload };
    case ActionTypes.SET_FIRST_PLAYER_CURRENT_SELECTED_CELLS:
      const updatedFirstPlayerState = [...state.firstPlayerCurrentCheckedCells,action.payload]
      console.log({updatedFirstPlayerState})
      return { ...state, firstPlayerCurrentCheckedCells:updatedFirstPlayerState };
    case ActionTypes.SET_SECOND_PLAYER_CURRENT_SELECTED_CELLS:
      const updatedSecondPlayerState = [...state.secondPlayerCurrentCheckedCells,action.payload]
      return { ...state, secondPlayerCurrentCheckedCells: updatedSecondPlayerState };
    case ActionTypes.UPDATE_CURRENT_PLAYER_ROUND:
        return { ...state, currentPlayerRound: action.payload };
    case ActionTypes.GENERATE_RANDOM_VALUE_FROM_DATA:
        return { ...state, valueFromCurrentBingo: action.payload};  
    default:
      return state;
  }
};
export default bingoReducer;

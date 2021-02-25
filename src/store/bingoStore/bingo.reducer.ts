import actionTypes from "./action.enum";
import { IBingoBoardState, IBingoActionType } from "./types";

const INITIAL_STATE: IBingoBoardState = {
  firstPlayerCurrentCheckedCells: [],
  possibleValidWinnerRows: [],
  secondPlayerCurrentCheckedCells: [],
  winner: "",
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
    case actionTypes.GENERATE_WINNER_COMBINATION:
      return { ...state, possibleValidWinnerRows: action.payload };
    case actionTypes.SET_FIRST_PLAYER_CURRENT_SELECTED_CELLS:
      return { ...state, firstPlayerCurrentCheckedCells: action.payload };
    case actionTypes.SET_SECOND_PLAYER_CURRENT_SELECTED_CELLS:
      return { ...state, possibleValidWinnerRows: action.payload };
    default:
      return state;
  }
};
export default bingoReducer;

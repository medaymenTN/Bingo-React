import { action } from "typesafe-actions";
import actionTypes from "./action.enum";

const generateValidCombination = (validCells: any) =>
  action(actionTypes.GENERATE_WINNER_COMBINATION, validCells);

const setFirstPlayerCurrentSelectedCells = (cell: any) =>
  action(actionTypes.SET_FIRST_PLAYER_CURRENT_SELECTED_CELLS, cell);

const setSecondPlayerCurrentSelectedCells = (cell: any) =>
  action(actionTypes.SET_SECOND_PLAYER_CURRENT_SELECTED_CELLS, cell);

export {
  generateValidCombination,
  setFirstPlayerCurrentSelectedCells,
  setSecondPlayerCurrentSelectedCells,
};

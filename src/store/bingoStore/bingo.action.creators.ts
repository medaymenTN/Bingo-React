import { action } from "typesafe-actions";
import { ActionTypes, Player } from "./action.enum";

const generateValidCombination = (validCells: any) =>
  action(ActionTypes.GENERATE_WINNER_COMBINATION, validCells);

const setFirstPlayerCurrentSelectedCells = (selectedValue: string) =>
  action(ActionTypes.SET_FIRST_PLAYER_CURRENT_SELECTED_CELLS, selectedValue);

const setSecondPlayerCurrentSelectedCells = (selectedValue: string) =>
  action(ActionTypes.SET_SECOND_PLAYER_CURRENT_SELECTED_CELLS, selectedValue);

const updateCurrentPlayer = (player: Player) =>
  action(ActionTypes.UPDATE_CURRENT_PLAYER_ROUND, player);

const generateBingoValueFromData = (value: string) =>
  action(ActionTypes.GENERATE_RANDOM_VALUE_FROM_DATA, value);

const stopCounter = () => action(ActionTypes.STOP_COUNTER);

export {
  stopCounter,
  updateCurrentPlayer,
  generateBingoValueFromData,
  generateValidCombination,
  setFirstPlayerCurrentSelectedCells,
  setSecondPlayerCurrentSelectedCells,
};

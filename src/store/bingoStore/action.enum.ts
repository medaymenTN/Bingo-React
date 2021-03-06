enum ActionTypes {
  GENERATE_WINNER_COMBINATION = "GENERATE_WINNER_COMBINATION",
  SET_FIRST_PLAYER_CURRENT_SELECTED_CELLS = "SET_FIRST_PLAYER_CURRENT_SELECTED_CELLS",
  SET_SECOND_PLAYER_CURRENT_SELECTED_CELLS = "SET_SECOND_PLAYER_CURRENT_SELECTED_CELLS",
  UPDATE_CURRENT_PLAYER_ROUND = "UPDATE_CURRENT_PLAYER_ROUND",
  GENERATE_RANDOM_VALUE_FROM_DATA = "GENERATE_RANDOM_VALUE_FROM_DATA",
  STOP_COUNTER = "STOP_COUNTER",
}

enum Player {
  FIRST_PLAYER = "FIRST_PLAYER",
  SECOND_PLAYER = "SECOND_PLAYER",
  UNKNOWN="UNKNOWN"

}
export  {ActionTypes,Player};

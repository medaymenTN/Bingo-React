import { Player } from "../../store/bingoStore/action.enum";

type IBingoBoardStateProps = {
  currentPlayerRound: string;
  firstPlayerCurrentCheckedCells: string[];
  secondPlayerCurrentCheckedCells: string[];
  possibleValidWinnerRows: any[];
};
type IBingoBoardOwnProps = {};
type IBingoBoardDispatchProps = {
  dispatchGenerateValidCombinations: (validCells: any) => void;
  dispatchSetFirstPlayerCurrentSelectedCells: (cell: any) => void;
  dispatchSetSecondPlayerCurrentSelectedCells: (cell: any) => void;
  dispatchStopCounter: () => void;
};

type IBingoBoardProps = IBingoBoardStateProps &
  IBingoBoardDispatchProps &
  IBingoBoardOwnProps;

type IBingoCellDefinition = {
  randomIdentifer: string;
  content: string;
  isChecked: boolean;
  Player: Player;
};

export {
  IBingoCellDefinition,
  IBingoBoardOwnProps,
  IBingoBoardDispatchProps,
  IBingoBoardStateProps,
  IBingoBoardProps,
};

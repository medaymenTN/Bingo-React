type IBingoBoardStateProps = any;
type IBingoBoardOwnProps = {};
type IBingoBoardDispatchProps = {
  dispatchGenerateValidCombination: (validCells: any) => void;
  dispatchSetFirstPlayerCurrentSelectedCells: (cell: any) => void;
  dispatchSetSecondPlayerCurrentSelectedCells: (cell: any) => void;
};

type IBingoBoardProps = IBingoBoardStateProps &
  IBingoBoardDispatchProps &
  IBingoBoardOwnProps;

type IBingoCellDefinition = {
  randomIdentifer: string;
  content: string;
  isChecked: boolean;
};

export {
  IBingoCellDefinition,
  IBingoBoardOwnProps,
  IBingoBoardDispatchProps,
  IBingoBoardStateProps,
  IBingoBoardProps,
};

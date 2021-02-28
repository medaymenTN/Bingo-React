import {
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
  fifthRow,
} from "../../data/data";
import {
  IBingoCellDefinition,
  IBingoBoardDispatchProps,
  IBingoBoardOwnProps,
  IBingoBoardStateProps,
  IBingoBoardProps,
} from "./types";
import React from "react";
import suffleArrayAndInjectObjectDefinition from "../../utils/suffleArrayAndInjectObjectDefinition";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "./style";
import {
  connect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
} from "react-redux";
import RootState from "../../store/types";
import {
  generateValidCombination,
  setFirstPlayerCurrentSelectedCells,
  setSecondPlayerCurrentSelectedCells,
} from "../../store/bingoStore/bingo.action.creators";
import { AnyAction, Dispatch } from "redux";
import generateCombination from "../../utils/generateCombination";
import bindDefinitionToArrayOfValues from "../../utils/bindDefinitionToArrayOfValues";
import { Player } from "../../store/bingoStore/action.enum";

const BingoBoardContainer = (props: IBingoBoardProps) => {
  //props
  const {
    dispatchSetSecondPlayerCurrentSelectedCells,
    dispatchSetFirstPlayerCurrentSelectedCells,
    dispatchGenerateValidCombinations,
    firstPlayerCurrentCheckedCells,
    secondPlayerCurrentCheckedCells,
    currentPlayerRound,
  } = props;
  // state declaration
  const classes = useStyles();

  const [firstRowState, setFirstRowState] = React.useState<
    IBingoCellDefinition[]
  >([]);
  const [secondRowState, setSecondRowState] = React.useState<
    IBingoCellDefinition[]
  >([]);
  const [thirdRowState, setThirdRowState] = React.useState<
    IBingoCellDefinition[]
  >([]);
  const [fourthRowState, setFourthRowState] = React.useState<
    IBingoCellDefinition[]
  >([]);
  const [fifthRowState, setFifthRowState] = React.useState<
    IBingoCellDefinition[]
  >([]);

  // Component lifeCycle

  React.useEffect(() => {
    const firstRowDefinition = suffleArrayAndInjectObjectDefinition(firstRow);
    const secondRowDefinition = suffleArrayAndInjectObjectDefinition(secondRow);
    const thirdRowDefinition = suffleArrayAndInjectObjectDefinition(
      thirdRow,
      true
    );
    const fourthRowDefinition = suffleArrayAndInjectObjectDefinition(fourthRow);
    const fifthRowDefinition = suffleArrayAndInjectObjectDefinition(fifthRow);

    setFirstRowState(firstRowDefinition);
    setSecondRowState(secondRowDefinition);
    setThirdRowState(thirdRowDefinition);
    setFourthRowState(fourthRowDefinition);
    setFifthRowState(fifthRowDefinition);

    const bindedFirstRowDefinition = bindDefinitionToArrayOfValues(
      firstRowDefinition
    );
    const bindedSecondRowDefinition = bindDefinitionToArrayOfValues(
      secondRowDefinition
    );
    const bindedThirdRowDefinition = bindDefinitionToArrayOfValues(
      thirdRowDefinition
    );
    const bindedFourthRowDefinition = bindDefinitionToArrayOfValues(
      fourthRowDefinition
    );
    const bindedFifthRowDefinition = bindDefinitionToArrayOfValues(
      fifthRowDefinition
    );

    const allPossibleCombination = generateCombination(
      bindedFirstRowDefinition,
      bindedSecondRowDefinition,
      bindedThirdRowDefinition,
      bindedFourthRowDefinition,
      bindedFifthRowDefinition
    );
    dispatchGenerateValidCombinations(allPossibleCombination);
  }, []);

  // Logic
  const handleStyleOnCellClick = (value: IBingoCellDefinition) => {
    if (value.Player === Player.UNKNOW) {
      return classes.paper;
    } else
      return value.isChecked && value.Player === Player.FIRST_PLAYER
        ? classes.firstPlayerCheckedCell
        : classes.secondPlayerCheckedCell;
  };

  const handleCellClick = (
    setrowState: any,
    rowState: IBingoCellDefinition[],
    currentSelectedValue: IBingoCellDefinition
  ) => {
    const isValueAlreadyTaken = [
      ...firstPlayerCurrentCheckedCells,
      ...secondPlayerCurrentCheckedCells,
    ].includes(currentSelectedValue.content);

    if (isValueAlreadyTaken) return;

    if (currentPlayerRound === Player.FIRST_PLAYER) {
      dispatchSetFirstPlayerCurrentSelectedCells(currentSelectedValue.content);
    } else {
      dispatchSetSecondPlayerCurrentSelectedCells(currentSelectedValue.content);
    }

    const updatedRowState = rowState.map((element) =>
      element.randomIdentifer === currentSelectedValue.randomIdentifer
        ? { ...element, isChecked: true, Player: currentPlayerRound }
        : element
    ) as IBingoCellDefinition[];

    setrowState(updatedRowState);
  };

  // UI
  return (
    <div className={classes.root}>
      <Grid container spacing={1} direction="row" xs={12}>
        {firstRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper
              onClick={() =>
                handleCellClick(setFirstRowState, firstRowState, value)
              }
              className={handleStyleOnCellClick(value)}
            >
              {value.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} direction="row" xs={12}>
        {secondRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper
              onClick={() =>
                handleCellClick(setSecondRowState, secondRowState, value)
              }
              className={handleStyleOnCellClick(value)}
            >
              {value.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} direction="row" xs={12}>
        {thirdRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper
              onClick={() =>
                handleCellClick(setThirdRowState, thirdRowState, value)
              }
              className={handleStyleOnCellClick(value)}
            >
              {value.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} direction="row" xs={12}>
        {fourthRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper
              onClick={() =>
                handleCellClick(setFourthRowState, fourthRowState, value)
              }
              className={handleStyleOnCellClick(value)}
            >
              {value.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} direction="row" xs={12}>
        {fifthRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper
              onClick={() =>
                handleCellClick(setFifthRowState, fifthRowState, value)
              }
              className={handleStyleOnCellClick(value)}
            >
              {value.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps: MapStateToPropsParam<
  IBingoBoardStateProps,
  IBingoBoardOwnProps,
  RootState
> = (state) => {
  return {
    currentPlayerRound: state.bingo.currentPlayerRound,
    firstPlayerCurrentCheckedCells: state.bingo.firstPlayerCurrentCheckedCells,
    secondPlayerCurrentCheckedCells:
      state.bingo.secondPlayerCurrentCheckedCells,
  };
};

const mapDispatchToProps: MapDispatchToPropsParam<
  IBingoBoardDispatchProps,
  IBingoBoardOwnProps
> = (dispatch: Dispatch<AnyAction>) => {
  return {
    dispatchGenerateValidCombinations: (validCells) => {
      return dispatch(generateValidCombination(validCells));
    },
    dispatchSetFirstPlayerCurrentSelectedCells: (cell) => {
      return dispatch(setFirstPlayerCurrentSelectedCells(cell));
    },
    dispatchSetSecondPlayerCurrentSelectedCells: (cell) => {
      return dispatch(setSecondPlayerCurrentSelectedCells(cell));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BingoBoardContainer);

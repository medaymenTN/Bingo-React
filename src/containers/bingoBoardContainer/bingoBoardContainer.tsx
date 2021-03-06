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
  stopCounter,
} from "../../store/bingoStore/bingo.action.creators";
import { AnyAction, Dispatch } from "redux";
import generateCombination from "../../utils/generateCombination";
import bindDefinitionToArrayOfValues from "../../utils/bindDefinitionToArrayOfValues";
import { Player } from "../../store/bingoStore/action.enum";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const BingoBoardContainer = (props: IBingoBoardProps) => {
  //props
  const {
    dispatchSetSecondPlayerCurrentSelectedCells,
    dispatchSetFirstPlayerCurrentSelectedCells,
    dispatchGenerateValidCombinations,
    firstPlayerCurrentCheckedCells,
    secondPlayerCurrentCheckedCells,
    currentPlayerRound,
    possibleValidWinnerRows,
    dispatchStopCounter,
  } = props;
  // state declaration
  const classes = useStyles();
  const { width, height } = useWindowSize();
  const [weHaveAwinner, setWeHaveAwinner] = React.useState<boolean>(false);
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
  const checkValidCombination = (currentPlayerSelectedValues) => {
    let isWinner = false;
    possibleValidWinnerRows.forEach((combination) => {
      isWinner = combination.every((v) =>
        currentPlayerSelectedValues.includes(v)
      );
      if (isWinner) {
        setWeHaveAwinner(true);
        dispatchStopCounter();
      }
    });
  };
  const handleStyleOnCellClick = (value: IBingoCellDefinition) => {
    if (value.Player === Player.UNKNOWN) {
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
      checkValidCombination([
        ...firstPlayerCurrentCheckedCells,
        currentSelectedValue.content,
      ]);
    } else {
      dispatchSetSecondPlayerCurrentSelectedCells(currentSelectedValue.content);
      checkValidCombination([
        ...secondPlayerCurrentCheckedCells,
        currentSelectedValue.content,
      ]);
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
      {weHaveAwinner && <Confetti width={width} height={height} />}
      <Grid
        container
        spacing={1}
        direction="row"
        xs={12}
        className={classes.container}
      >
        {firstRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`} xs={2}>
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
      <Grid
        container
        spacing={1}
        direction="row"
        xs={12}
        className={classes.container}
      >
        {secondRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`} xs={2}>
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
      <Grid
        container
        spacing={1}
        direction="row"
        xs={12}
        className={classes.container}
      >
        {thirdRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`} xs={2}>
            <Paper
              onClick={() => {
                if (value.content !== "X") {
                  handleCellClick(setThirdRowState, thirdRowState, value);
                }
              }}
              className={handleStyleOnCellClick(value)}
            >
              {value.content}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        spacing={1}
        direction="row"
        xs={12}
        className={classes.container}
      >
        {fourthRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`} xs={2}>
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
      <Grid
        container
        spacing={1}
        direction="row"
        xs={12}
        className={classes.container}
      >
        {fifthRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`} xs={2}>
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
    possibleValidWinnerRows: state.bingo.possibleValidWinnerRows,
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
    dispatchStopCounter: () => {
      dispatch(stopCounter());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BingoBoardContainer);

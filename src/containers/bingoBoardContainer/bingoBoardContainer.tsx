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
import { Grid, Paper } from "@material-ui/core";
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

const BingoBoardContainer = (props: IBingoBoardProps) => {
  //props
  const {
    dispatchSetSecondPlayerCurrentSelectedCells,
    dispatchSetFirstPlayerCurrentSelectedCells,
    dispatchGenerateValidCombination,
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

    generateCombination(
      bindedFirstRowDefinition,
      bindedSecondRowDefinition,
      bindedThirdRowDefinition,
      bindedFourthRowDefinition,
      bindedFifthRowDefinition
    );
  }, []);

  // Logic
  const handleClear = () => {};

  // UI
  return (
    <div className={classes.root}>
      <button onClick={handleClear}>Clear</button>
      <Grid container spacing={1} direction="row">
        {firstRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper className={classes.paper}>{value.content}</Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} direction="row">
        {secondRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper className={classes.paper}>{value.content}</Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} direction="row">
        {thirdRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper className={classes.paper}>{value.content}</Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} direction="row">
        {fourthRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper className={classes.paper}>{value.content}</Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} direction="row">
        {fifthRowState.map((value: IBingoCellDefinition, index: number) => (
          <Grid item key={`cell-${index}`}>
            <Paper className={classes.paper}>{value.content}</Paper>
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
> = (state) => {};

const mapDispatchToProps: MapDispatchToPropsParam<
  IBingoBoardDispatchProps,
  {}
> = (dispatch: Dispatch<AnyAction>) => {
  return {
    dispatchGenerateValidCombination: (validCells) => {
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

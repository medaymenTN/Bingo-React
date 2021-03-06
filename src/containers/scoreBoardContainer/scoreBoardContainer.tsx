import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  connect,
  MapDispatchToPropsParam,
  MapStateToPropsParam,
} from "react-redux";
import { Player } from "../../store/bingoStore/action.enum";
import {
  generateBingoValueFromData,
  updateCurrentPlayer,
} from "../../store/bingoStore/bingo.action.creators";
import RootState from "../../store/types";
import generateValueFromData from "../../utils/generateValueFromData";
import useStyles from "./style";
import {
  IScoreBoardContainerProps,
  IScoreBoardContainerStateProps,
  IScoreBoardContainerDispatchProps,
} from "./types";

const ScoreBoardContainer = (props: IScoreBoardContainerProps) => {
  const classes = useStyles();
  const {
    currentPlayerRound,
    dispatchGenerateValueFromData,
    dispatchUpdateCurrentPlayer,
    firstPlayerCurrentCheckedCells,
    secondPlayerCurrentCheckedCells,
    valueFromCurrentBingo,
    counterIsPlaying,
  } = props;

  const handleCompleteTimerEvent = () => {
    const currentPlayer =
      currentPlayerRound === Player.FIRST_PLAYER
        ? Player.SECOND_PLAYER
        : Player.FIRST_PLAYER;

    const combinedArrays = [
      ...firstPlayerCurrentCheckedCells,
      ...secondPlayerCurrentCheckedCells,
    ];
    const value = generateValueFromData(combinedArrays);

    dispatchGenerateValueFromData(value);
    dispatchUpdateCurrentPlayer(currentPlayer);
  };

  return (
    <Paper className={classes.root}>
      <h1>
        {currentPlayerRound === Player.FIRST_PLAYER ? "Player 1 " : "Player 2 "}
        select cell {valueFromCurrentBingo}
      </h1>
      <div className={classes.counter}>
        <CountdownCircleTimer
          isPlaying={counterIsPlaying}
          duration={10}
          onComplete={() => {
            handleCompleteTimerEvent();
            return [true, 1000];
          }}
          colors={[
            ["#004777", 0.33],
            ["#F7B801", 0.33],
            ["#A30000", 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>

      <h2>Instructions :</h2>
      <Typography>
        this bingo board could be played between 2 players each time the
        countdown ends the next player should pick the generated number, colors
        blue and red will define each player
      </Typography>
    </Paper>
  );
};

const mapDispatchToProps: MapDispatchToPropsParam<
  IScoreBoardContainerDispatchProps,
  {}
> = (dispatch) => {
  return {
    dispatchUpdateCurrentPlayer: (player: Player) => {
      dispatch(updateCurrentPlayer(player));
    },
    dispatchGenerateValueFromData: (value: string) => {
      dispatch(generateBingoValueFromData(value));
    },
  };
};

const mapStateToProps: MapStateToPropsParam<
  IScoreBoardContainerStateProps,
  {},
  RootState
> = (state: RootState) => {
  return {
    firstPlayerCurrentCheckedCells: state.bingo.firstPlayerCurrentCheckedCells,
    secondPlayerCurrentCheckedCells:
      state.bingo.secondPlayerCurrentCheckedCells,
    currentPlayerRound: state.bingo.currentPlayerRound,
    valueFromCurrentBingo: state.bingo.valueFromCurrentBingo,
    counterIsPlaying: state.bingo.counterIsPlaying,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoardContainer);

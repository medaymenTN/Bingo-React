import { Player } from "../../store/bingoStore/action.enum";

type IScoreBoardContainerStateProps = {
  currentPlayerRound:string
  firstPlayerCurrentCheckedCells:string[],
  secondPlayerCurrentCheckedCells:string[],
  valueFromCurrentBingo: string
};

type IScoreBoardContainerDispatchProps = {
  dispatchUpdateCurrentPlayer : (player:Player) => void
  dispatchGenerateValueFromData : (value:string) => void
}
type IScoreBoardContainerProps = IScoreBoardContainerStateProps & IScoreBoardContainerDispatchProps



export {
  IScoreBoardContainerDispatchProps,
  IScoreBoardContainerStateProps,
  IScoreBoardContainerProps,
};

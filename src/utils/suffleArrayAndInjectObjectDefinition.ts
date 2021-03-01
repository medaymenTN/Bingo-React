import { IBingoCellDefinition } from "../containers/bingoBoardContainer/types";
import { Player } from "../store/bingoStore/action.enum";
import generateString from "./generateRandomString";

const suffleArrayAndInjectObjectDefinition = (
  tab: string[],
  shouldInjectValidCell?: boolean
) => {
  let finalArray: IBingoCellDefinition[] = [];

  const randomArrayColums = tab
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  randomArrayColums.forEach((element: string) => {
    finalArray = [
      ...finalArray,
      {
        content: element,
        isChecked: false,
        randomIdentifer: generateString(),
        Player:Player.UNKNOWN
      },
    ];
  });
  if (shouldInjectValidCell) { 
    finalArray.splice(2, 0, {
      content: "X",
      isChecked: true,
      randomIdentifer: "X",
      Player:Player.UNKNOWN
    });
  }

  return finalArray;
};

export default suffleArrayAndInjectObjectDefinition;

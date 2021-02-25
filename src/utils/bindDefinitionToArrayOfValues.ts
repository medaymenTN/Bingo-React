import { IBingoCellDefinition } from "../containers/bingoBoardContainer/types";

const bindDefinitionToArrayOfValues = (
  arrayWithDefinition: IBingoCellDefinition[]
) => {
  return arrayWithDefinition.map(
    (element: IBingoCellDefinition) => element.content
  );
};

export default bindDefinitionToArrayOfValues;

const generateCombination = (
  firstRow: string[],
  secondRow: string[],
  thirdRow: string[],
  fourthRow: string[],
  fifthRow: string[]
) => {
  let allCombinations: any = [];

  for (let index = 0; index <= 4; index++) {
    const columnsValidRows = [
      firstRow[index],
      secondRow[index],
      thirdRow[index] ? thirdRow[index] : "X",
      fourthRow[index],
      fifthRow[index],
    ];
    allCombinations = [...allCombinations, columnsValidRows];
  }

  const diagonalValidRows: string[] = [
    firstRow[0],
    secondRow[1],
    thirdRow[2],
    fourthRow[3],
    fifthRow[4],
  ];
  const reverseDiagonalValidRows: string[] = [
    firstRow[4],
    secondRow[3],
    thirdRow[2],
    fourthRow[1],
    fifthRow[0],
  ];

  allCombinations = [
    ...allCombinations,
    diagonalValidRows,
    reverseDiagonalValidRows,
    firstRow,
    secondRow,
    thirdRow,
    fourthRow,
    fifthRow,
  ];

  return allCombinations
};

export default generateCombination;

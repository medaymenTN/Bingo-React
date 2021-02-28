import {
    firstRow,
    secondRow,
    thirdRow,
    fourthRow,
    fifthRow,
  } from "../data/data";



  const generateValueFromData = (currentValues:string[])=>{
    

    const allData = [...firstRow,...secondRow,...thirdRow,...fifthRow,...fourthRow]
    const difference = allData.filter( x => !currentValues.includes(x)  );
 
    return currentValues.length ===0 ? allData[Math.floor(Math.random() * allData.length)] :  difference[Math.floor(Math.random() * difference.length)]
  }



  export  default generateValueFromData
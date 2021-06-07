'use strict';

function multiBracketValidation(input) {

  let parenCount=0, bracketCount=0, curleCount = 0;
  for (let i = 0; i < input.length; i++) {
    let checkChar = input[i];
    if (checkChar == '(') parenCount++;
    if (checkChar == ')') parenCount--;
    if (checkChar == '[') bracketCount++;
    if (checkChar == ']') bracketCount--;
    if (checkChar == '<') curleCount++;
    if (checkChar == '>') curleCount--;
    if (parenCount < 0 || bracketCount < 0 || curleCount < 0) {return false;}

  }
  return ((parenCount + bracketCount + curleCount) === 0 ? true : false);

}

module.exports=multiBracketValidation;

const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = '';
  let {repeatTimes=1, separator='+', addition='', additionRepeatTimes=1, additionSeparator='|'} = options;
  let strStr = String(str);
  let additionStr = String(addition);
  for(let i=0; i<repeatTimes; i++){
    newStr += strStr;
    for(let j=0; j<additionRepeatTimes; j++){
      newStr += additionStr;
      if(j < (additionRepeatTimes-1)){
        newStr += additionSeparator;
      }
    }
    if(i < (repeatTimes-1)){
      newStr += separator;
    }
  }
  return newStr;
};
  
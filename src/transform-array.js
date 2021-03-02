const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  if (!arr || !Array.isArray(arr)) {
    throw new TypeError("Is not a array");
  }
  for(let i=0; i<arr.length; i++){
    if(arr[i-1] === '--discard-next' || arr[i+1] === '--discard-prev' || arr[i] === '--double-prev' && arr[i-2] === '--discard-next'){
    }
    else if(arr[i] === '--double-next'){
      if(i !== (arr.length -1)){
        newArr.push(arr[i+1]);
      }
    }
    else if(arr[i] === '--double-prev'){
      if(i !== 0){
        newArr.push(arr[i-1]);
      }
    }
    else if(arr[i] !== '--discard-next' && arr[i] !== '--discard-prev'){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
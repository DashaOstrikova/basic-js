const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] === '--discard-next'){
      i++;
    }
    else if(arr[i] === '--discard-prev'){
      if(i != 0){
        newArr.splice(i-1,1);
      }
    }
    else if(arr[i] === '--double-next'){
      if(i != (arr.length -1)){
        newArr = [...newArr, arr[i+1]];
      }
    }
    else if(arr[i] === '--double-prev'){
      if(i != 0){
        if(arr[i-2] ==='--discard-next'){}
        else{
          newArr = [...newArr, arr[i-1]];
        }
      }
    }
    else{
      newArr = [...newArr, arr[i]];
    }
  }
  return newArr;
}

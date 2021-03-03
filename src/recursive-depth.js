const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    for(let i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        let newDepth = this.calculateDepth(arr[i]);
        if(newDepth > depth){
          depth = newDepth;
        } 
      }
    }
    return depth + 1;
  }
};
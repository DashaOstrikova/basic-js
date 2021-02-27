const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  throw new CustomError('Not implemented');
  let kol = 0;
  for(i=0; i<n; i++){
    for(j=0; j<m; j++){
      if(arr[i][j]='^^'){
          kol++;
      }
    }   
  }
  return kol;
};
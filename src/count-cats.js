const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach((str,i) => {
    str.forEach(char => {
      if(char == '^^') {
        count++;
      }
    })
  })
  return count;
}
const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = Math.pow(2, disksNumber) - 1
  return {
    turns: turn,
    seconds: Math.floor(turn / (turnsSpeed / 3600)),
  }
};

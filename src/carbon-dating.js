const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNumber = Number(sampleActivity);
  if(typeof sampleActivity !== "string" || sampleActivity === undefined || isNaN(sampleActivityNumber) || sampleActivityNumber <= 0 || sampleActivityNumber > 15){
    return false;
  }
  let rateConstant = 0.693 / HALF_LIFE_PERIOD;
  let countYears = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / rateConstant);
  return countYears;
};
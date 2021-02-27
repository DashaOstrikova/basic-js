const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = '';
  if(!members || !members.length) {
    return false;
  }
  let strMembers = members.filter(str => typeof str === "string").map(name => name.toUpperCase().trim()[0]);
  let sortMembers = strMembers.sort();
  dreamTeam = sortMembers.join('');
  return dreamTeam;
}

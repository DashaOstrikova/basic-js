const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  let dreamTeam = '';
  let sortMembers = members.sort();
  for(let i=0;i<members.length;i++){
    if(typeof sortMembers[i] == "string"){
      sortMembers[i].toUpperCase();
      let name = sortMembers[i].split(); 
      dreamTeam += name[0];
    }
  }
};

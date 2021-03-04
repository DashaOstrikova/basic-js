const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  str: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push(String(value))
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || !Number.isInteger(position) || this.chain[position] === undefined){
      this.chain = [];
      throw new TypeError('position is not a number or does not exist');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    this.str = `( ${this.chain[0]} )`;
    for(let i=1; i<this.chain.length; i++){
      this.str += `~~( ${this.chain[i]} )`;
    }
    this.chain = [];
    return this.str;
  }
};
module.exports = chainMaker;
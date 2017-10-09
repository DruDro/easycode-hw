const str = promt('Enter the string');
const obj = {
  str,
  getStrLength() {return this.str.length},
  getStrReverse() {return this.str.split('').reverse().join('')}
};

obj.getStrLength();
obj.getStrReverse();

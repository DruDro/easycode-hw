const names = {
  0: 'Vasya',
  1: 'Petya',
  2: 'Kolya'
};

names[Symbol.iterator] = function() {
  const length = Object.keys(this).length;
  let index = 0;
  return {
    next: () => {
      return {
        value: this[index++],
        done: index > length
      };
    }
  }
};

for (let val of names) {
  console.log(val);
}

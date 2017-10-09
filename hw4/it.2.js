const obj = { zone: true, word: 'test', skill: 'JS', name: 'John' }

obj[Symbol.iterator] = function() {
  const length = Object.keys(this).length;
	const sorted = Object.keys(this).sort();
  let index = 0;
  return {
    next: () => {
		let val = sorted[index++];
      return {
        value: this[val],
        done: index > length
      };
    }
  }
};

for (let l of obj) {
  console.log(l);
}

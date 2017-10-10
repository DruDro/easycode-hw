const date = {
  [Symbol.iterator]: () => {
    const now = new Date();
    const dateObj = ['FullYear', 'Month', 'Day', 'Date', 'Hours', 'Minutes', 'Seconds'];
    let index = 0;
    const length = dateObj.length;
    return {
      next: () => {
        let key = dateObj[index++],
            method = now[`get${key}`];
        return method ? { value: `${key} is ${method.call(now)}`} : {done: true};
      }
    }
  }
};

/*

for (let d of date) {
  console.log(d)
}

[...date]

*/

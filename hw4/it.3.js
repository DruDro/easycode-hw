const date = {
  [Symbol.iterator]: (date = new Date()) => {
    const dateObj = [
      'FullYear',
      'Month',
      'Day',
      'Date',
      'Hours',
      'Minutes',
      'Seconds'
    ]
    let index = 0;
    const length = dateObj.length;
    return {
      next: (key = dateObj[index++], method = () => dateObj[`get${key}`]) => {
        return method ? {
          value: `${key} is ${method()}`,
          done: index > length
        } : {done:true}
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

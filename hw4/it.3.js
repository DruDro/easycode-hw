const date = {
  [Symbol.iterator]: (date = new Date()) => {
    const dateObj = {
      FullYear: date.getFullYear(),
      Month: date.getMonth(),
      Day: date.getDay(),
      Date: date.getDate(),
      Hours: date.getHours(),
      Minutes: date.getMinutes(),
      Seconds: date.getSeconds()
    }
    let index = 0;
    const length = Object.keys(dateObj).length;
    return {
      next: (key = Object.keys(dateObj)[index++]) => ({
        value: `${key} is ${dateObj[key]}`,
        done: index > length
      })
    };
  }
};

/*

for (let d of date) {
  console.log(d)
}

[...date]

*/

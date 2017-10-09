const promiseCreator = (time, msg) => new Promise((resolve, reject) => setTimeout(() => resolve(msg), time));

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

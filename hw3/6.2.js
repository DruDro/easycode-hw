class Prom {
  constructor() {
    this.promise = new Promise((res, rej) => {

      this.resolve = res;
      this.reject = rej;
    });
  }
}



/*
const inst = new Prom();
inst.resolve('res');
inst.promise.then(data => console.log(data));
*/

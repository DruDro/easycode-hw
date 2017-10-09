// Code goes here

class Prom {
  constructor() {
    this.promise = new Promise((res, rej) => {

      this.resolve = res;
      this.reject = rej;
    });
    this.promise.then((input) => console.log(input))
  }
}

document.querySelector('#submitBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const inst = new Prom();
  const input = document.getElementById('text').value;
  inst.resolve(input);
}, false);
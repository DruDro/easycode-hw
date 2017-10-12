function* createSeconds() {
  while (true) {
    let seconds = yield Math.floor((new Date()).getSeconds() / 10) * 10;
  }
}


/*

const getSec = createSeconds();
getSec.next().value;

*/

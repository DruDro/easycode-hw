function* createSeconds() {
  while (true) {
    yield Math.floor((new Date()).getSeconds() / 10) * 10;
  }
}


/*

const getSec = createSeconds();
getSec.next().value;

*/

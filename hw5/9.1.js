function* getValue(number) {
  let n = number;
  while(true){
    let nNext = number*n;
    yield nNext;
    n = nNext;
    if(n >= 1000000000){
      throw new Error('Value is too big!');
    }
  }
}



/*

const valuer = getValue(5);
valuer.next().value;

const valuerBig = getValue(5000);
valuerBig.next().value;

*/

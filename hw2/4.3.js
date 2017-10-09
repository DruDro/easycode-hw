const getOneObject = (...args) => Object.assign({},...args);

getOneObject( {test: 123}, {value: 'hello'}, {flag: false} );

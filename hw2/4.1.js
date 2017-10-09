const getObject = (name = 'User', age = 25) => ({ name, age });

getObject(); //  {name: "User", age: 25}
getObject('Vasya', 10); // {name: "Vasya", age: 10}

const getObject = (name = 'User', age = 25) => {
  const obj = { name, age };
  return obj;
};

getObject(); //  {name: "User", age: 25}
getObject('Vasya', 10); // {name: "Vasya", age: 10}

const afunc = async() => {
  const request = await fetch('https://jsonplaceholder.typicode.com/todos');
  const tasks = await request.json();
  const users = [];

  for (let task of tasks) {
    const userId = task.userId;
    if (!users.find(user => user.userId === userId)) {
      users.push({userId: userId});
    }
  }

  for (let user of users) {
    const userId = user.userId;
    user.complete = 0;
    user.incomplete = 0;
    for (let task of tasks) {
      if (task.userId == userId) {
        if (task.completed == true) {
          user.complete++;
        } else {
          user.incomplete++;
        }
      }
    }
  }

  let ul = document.createElement('ul');
  for (let user of users) {
    const li = `<li>Пользователь userID=${user.userId} имеет ${user.complete} завершенных и ${user.incomplete} не завершенных заданий</li>`;
    ul.innerHTML += li;
  }
  document.body.appendChild(ul);
}

afunc();

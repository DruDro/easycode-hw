const p = fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.status == '200' ? r.json() : Promise.reject(r));
const u = fetch('https://jsonplaceholder.typicode.com/users').then(r => r.status == '200' ? r.json() : Promise.reject(r));

Promise.all([p,u]).then(data => {
    const pLength = data[0].length;
    const uLength = data[1].length;
    setTimeout(() => console.log(`${pLength} posts | ${uLength} users`), 300);
}).catch(e => console.log(e.status));

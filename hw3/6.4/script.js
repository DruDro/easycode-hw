// Code goes here
const ul = document.querySelector('#ul');
let ulHtml = '';
let getPosts = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        for(let post of posts){
          const [id, title] = [post.id, post.title];
          ulHtml += `<li><h2>${id} - ${title}</h2></li>`;
        }
        ul.innerHTML = ulHtml;
      });
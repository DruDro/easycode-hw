const prettyDate = require('./date');
console.log(prettyDate());

const fs = require('fs');
fs.readFile('./name.txt', 'utf-8', (error, data) => {
    if (error) return console.log(error);
    console.log(data);
});


const read = require('./read');

read('name.txt')
    .then(console.log)
    .catch(console.log);


async function readFile(filename) {
    let text;
    try {
        text = await read(filename);
    } catch (err) {
        text = err.message;
    }

    console.log(text);
}

readFile('name.txt');



const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {

    res.setEncoding('utf-8');
    let result = '';
    let count = 0;
    res.on('data', data => {
        result += data;
        count++
    });
    res.on('end', () => console.log(result, count));
}).on('error', e => console.error(e.message)); //WHY the fuck onError chained to http?



const weather = require('yahoo-weather');

weather('kharkov')
    .then(data => {
        console.log(data.description);
        console.log(data.item.condition);
    })
    .catch(console.log);
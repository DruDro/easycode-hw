const filename = __filename.substring(__filename.lastIndexOf('\\') + 1);
let date = require('./date');

console.log(`File: ${filename}
Timestamp: ${date.hours}:${date.minutes} ${date.date}.${date.month}.${date.year}   
`);
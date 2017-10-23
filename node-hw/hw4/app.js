const fs = require('file-system');
const dirname = 'date';
let date = (new Date()).toLocaleString();

fs.mkdir(dirname);
fs.writeFile(`${dirname}/date.txt`, date);
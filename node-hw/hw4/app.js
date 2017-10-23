const fs = require('file-system');
const dirname = 'date';
let date = (new Date()).toLocaleString();


try {
    fs.mkdirSync(dirname);
    fs.writeFile(`${dirname}/date.txt`, date)
} catch (e) {
    console.log(e)
}
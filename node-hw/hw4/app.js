const fs = require('file-system');
const dirname = 'date';
let date = (new Date()).toLocaleString();

const prom = new Promise((resolve, reject) => {
    try {
        fs.mkdirSync(dirname);
    } catch (e) {
        reject(e => e);
    }
    resolve();

});
prom.then(() => fs.writeFile(`${dirname}/date.txt`, date))
prom.catch(e => console.log(e));

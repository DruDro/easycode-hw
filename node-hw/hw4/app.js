const fs = require('file-system');
const dirname = 'date';
let date = (new Date()).toLocaleString();

(async function createDir() {
	await fs.mkdir(dirname);
	fs.writeFile(`${dirname}/date.txt`, date);
}());


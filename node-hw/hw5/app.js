const fs = require('file-system');
const http = require('http');

http.get('http://wttr.in/~kharkov', (res) => {

    res.setEncoding('utf-8');
    let result = '';
    res.on('data', data => result += data );
    res.on('end', () => fs.writeFile('weather.html', result)) ;
}).on('error', e => console.error(e.message)); //WHY the fuck onError chained to http?


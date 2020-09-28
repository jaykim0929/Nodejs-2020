const http = require('http');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    if (pathname === '/') {
        fs.readFile('view/12.form.html', 'utf8', (error, html) => {
            res.end(html);
        });
    } else if (pathname === '/proc') {
        let body = '';
        req.on('data', function(data) {
            body += data;
        })
        req.on('end', function() {
            let param = qs.parse(body);
            console.log(param);
            console.log(param.uid, param.pwd);
            res.end(`<h1>${JSON.stringify(param)}</h1>`);
        });
    }
}).listen(4000, () => {
    console.log('Server running at http://localhost:4000');
}); 
const http = require('http');
const url = require('url');
const fs = require('fs');

let server = http.createServer((req, res) => {
    let mathod = req.method;
    if (mathod === 'GET') {
        fs.readFile('view/10.form.html', 'utf8',(error, html) => {
            res.end(html);
        });
    } else if (method === 'POST'){
        res.end('<h1>Received Form Data</h1>');
    }
});

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
}); 
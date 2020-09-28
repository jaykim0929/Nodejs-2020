const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log(pathname);
    let html;
    if (pathname === '/')
        html = '/';
    else if (pathname === '/file')
        html = '/file';
    else
        html = pathname;
    res.end(`<h1>${html}</h1>`);
});
server.listen(4000, () => {
    console.log('Server running at http://localhost:3000');
}); 
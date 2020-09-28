const http = require('http');

let server = http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    let cookie = request.headers.cookie;
    response.writeHead(200, {    // Status code, OK
        'Content-Type': 'text/html',
        'Set-Cookie': ['breakfast = toast', 'dinner = chicken']  
    });
    response.end(`<h1>${cookie}</h1>`);
});

server.listen(4000, () => {
    console.log('Server running at http://localhost:3000');
});    
const http = require('http');
const view = require('./view/01.first');

let server = http.createServer(function(request, response) {
    //console.log(request);
    let html = view.first();
    response.writeHead(200,     // Status code, OK
        {'Content-Type': 'text/html'});
    response.end(html);
});

server.listen(4000);
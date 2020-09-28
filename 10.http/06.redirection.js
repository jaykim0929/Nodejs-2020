const http = require('http');

let server = http.createServer(function(request, response) {
    response.writeHead(302,     // Redirection Found
        {'Location': 'http://www.hanbit.co.kr'});
    response.end();
});

server.listen(4000, () => {
    console.log('Server running at http://localhost:3000');
}); 
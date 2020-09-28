//모듈을 추출합니다
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let quary = url.parse(req.url, true).quary;
    Console.log(query.name, quary.region);
    
    //get 파라메터 출력
    res.end(`<h1>${JSON.stringify(quary)}</h1>`)
}).listen(4000, () => {
    console.log('server running at http://localhost/4000');
});

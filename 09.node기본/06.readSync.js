//동기적으로 파일 읽기

const fs = require('fs');

//Binary data 읽기
let buffer = fs.readFileSync('tmp/textfile.txt');
console.log(buffer);
console.log(buffer.toString());

//Text data 읽기
let text = fs.readFileSync('tmp/textfile.txt', 'utf8');
console.log(text);
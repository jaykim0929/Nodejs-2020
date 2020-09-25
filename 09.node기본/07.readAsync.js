//비동기적으로 파일 읽기

const fs = require('fs');
fs.readFile('tmp/textfile.txt', 'utf8', function(error, buffer){
    console.log(buffer);
});
// 비동기적으로 파일 쓰기

const fs = require('fs');

let buffer = `비동기적으로 파일 쓰기
비동기적으로 파일 쓰기
`;
/* fs.writeFile('tmp/ascync.txt', buffer, function(error){
    if (error)
    console.log(error);
}); */

// 기존 파일에 데이터를 추가하는 경우

buffer = '추가 데이터입니다.\n';
fs.writeFile('tmp/async.txt', buffer, {flag: 'a'}, e => {
    if  (e)
        console.log(e);
});
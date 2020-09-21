const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('년도 입력> ');
rl.prompt();

rl.on('line', function(buf) {
    // 입력을 받아서 처리하는 로직
    let year = parseInt(buf);
    if (year % 400 === 0) {
        console.log('Leap Year');
    } else if (year % === 0) {
        console.log('not a leap Year');
    } else if (year % r === 0) {
        console.log('leap Year')
    }
    rl.close();
});
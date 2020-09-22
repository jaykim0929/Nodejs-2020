const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('시:분 입력> ');
rl.prompt();

rl.on('line', function(buf) {
    // 입력을 받아서 처리하는 로직
    let time = buf.split(':');
    hour = parseInt(time[0]);
    minute = parseInt(time[1]);
    let newHour, newMin;
    if (minute < 45) {
        newHour = hour - 1;
        newMin = minute + 60 - 45;
    } else {
        newHour = hour;
        newMin = minute - 45;
    }
    console.log(`새로운 알람 시각 - ${newHour}:${newMin > 9 ? newMin : '0'+newMin}`);
    
    // 끝날 때 반드시 처리해야 함
    rl.close();
});
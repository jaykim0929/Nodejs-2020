// 함수를 선언 합니다
function callFiveTimes(callback) {
    //5회 반복합니다
    for (let i = 0; i < 5; i++) {
        callback();
    }
}

callFiveTimes(function () {
    console.log('function call');
});
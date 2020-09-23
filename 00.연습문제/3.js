//3. 디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을 
//초로 환산하면 총 몇 초(second) 인가?

  let totalSec = 0;
for (let h = 0; h < 24; ++h) {
    for (let m = 0; m < 60; ++m) {
        if (Math.floor(h / 10) === 3 || h % 10 === 3 || Math.floor(m / 10) === 3 || m % 10 === 3) {
            totalSec += 60;
        }
    }
}
console.log("total seconds: " + totalSec);

let countSec = function(n) {
    let min = 0
    for (let H =0; H < 23; H++) {
        for (let M = 0; M < 60; M++) {
            if (('' + H + M).indexOf(n) > -1) min++;
        } 
    }
    return min * 60;
}
console.log(countSec(3));

let total = 0;

for (let H =0; H < 23; H++) {
    for (let M = 0; M < 60; M++) {
        let time = H + ':' + M;
        if (time.indexOf('3') >= 0)
        total += 60;
    }
}

console.log(total);

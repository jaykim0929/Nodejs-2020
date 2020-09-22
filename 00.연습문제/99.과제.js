// 1. 양의 정수 N을 입력으로 받아 1부터 
// N까지 제곱의 합과 합의 제곱을 구하시오.
/* 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('양의 정수 입력: ');
rl.prompt();


rl.on('line', function(buf) {
    // 입력을 받아서 처리하는 로직
    let orgNumber = (buf.length > 1) ? buf : '0'+buf[0];
    let number = orgNumber;
    let cycle = 0;
    while(true) {        
        let sum = parseInt(number[0]) + parseInt(number[1]);
        let newNumber = number[1] + sum % 10;
        cycle++;
        console.log(number, newNumber, cycle);
        if (orgNumber === newNumber)
            break;
        if (cycle > 100)
            break;
        number = newNumber;
    }

    // 끝날 때 반드시 처리해야 함
    rl.close();
});


 */

// 2.a + b + c = 1000 인 피타고라스 수를 구하시오.
// 즉, a*a + b*b = c*c 을 만족하고
// a < b < c 이고, a + b > c 이다.

let e009 = () => {
    let k = 1000;
    for(let a = 0; a < k / 3; a++) {
      for(let b = a; b < (k-a)/2; b++) {
        let c = k - a - b;
        if(c*c==a*a+b*b) {
          console.log(a*b*c);
          return;
        }
      }
    }
  }
  
  e009()
//3. 디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을 
//초로 환산하면 총 몇 초(second) 인가?
/* 
  let totalSec = 0;
for (let h = 0; h < 24; ++h) {
    for (let m = 0; m < 60; ++m) {
        if (Math.floor(h / 10) === 3 || h % 10 === 3 || Math.floor(m / 10) === 3 || m % 10 === 3) {
            totalSec += 60;
        }
    }
}
console.log("total seconds: " + totalSec); */

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


// 4. 1에서 1000까지 각 숫자의 갯수를 구하시오.

let count = {};
for (let i = 0; i < 10; i++) count[i] = 0;

for (let i = 1; i < 1001; i++) {
  let temp = String(i);
  for (let k = 0; k < temp.length; k++) {
    count[temp[k]] += 1;
  }
}
console.log(count);

//5. 세자리 수를 곱해 만들 수 있는 가장 큰 대칭수(palindrome)와
//   세자리 수를 구하시오.
//   단, 대칭수는 12321과 같은 수를 의미함.
/* 
for (let i = 100; i < 1000; i++) {
    for (let k = 100; k < 1000; k++) {
        let newNum = i * k;
        newNum = newNum.toString()
        if (newNum === newNum.split("").reverse().join("")) {
            console.log(newNum)
        }
    }
} */
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


// ver.3
let a, b, c;
let outerBreak = false;
for (a=1; a<=332; a++){
    for (b=a+1; b<=499; b++){
        c = 1000 - a - b;
        if (c > (a + b))
            continue;
        if (c*c === a*a + b*b) {
            console.log(a, b, c);
            console.log(a*a, b*b, c*c);
            break
        }
    }
}
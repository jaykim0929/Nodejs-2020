//5. 세자리 수를 곱해 만들 수 있는 가장 큰 대칭수(palindrome)와
//   세자리 수를 구하시오.
//   단, 대칭수는 12321과 같은 수를 의미함.
//ver.1
/* for (let i = 100; i < 1000; i++) {
    for (let k = 100; k < 1000; k++) {
        let newNum = i * k;
        newNum = newNum.toString()
        if (newNum === newNum.split("").reverse().join("")) {
            console.log(newNum)
        }
    }
}
 */
//ver.2

function isPalindrome(str) {
    let len = str.length;
    for (let i=0; i<parseInt(len/2); i++){
        if (str[i] === str[len-1-i])
            return false;
    }
    return true;
}

let maxPal=0;
let maxX, maxY;
for (let i=100; i<=999; i++) {
    for (let k=1; k<=999; k++) {
        let product = i * k;
        if (isPalindrome(String(product))){
            if (product > maxPal) {
                maxPal = product;
                maxX = i;
                maxY = k;
            }
        }
    }
}

console.log(maxX, maxY, maxPal);

let person = {
    name: '홍길동', gender: '남자', age: 29
}

//for of 는 ERROR!
/* for (let item of person) {
    console.log(item);
} */

for (let key in person) {
    console.log(key, person[key]);
}
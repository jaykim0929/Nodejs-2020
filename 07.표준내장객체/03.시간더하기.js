let date = new Date();

console.log(date.toDateString());
//현재 날짜에서 100일 더한 날짜
date.setDate(date.getDate()+100);
console.log(date.toDateString());


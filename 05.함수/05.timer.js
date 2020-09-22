let today = new Date();
console.log(today);

setTimeout(() => {
    console.log('3초경과')
}, 3000);

setTimeout(function() {
    clearInterval(si);
}, 5000);

let si = setInterval(() => {
    console.log(new Date());
}, 1000);
    
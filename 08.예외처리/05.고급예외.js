let size = -10;

try {
    let array = new Array(size);
} catch (e){
    console.log(e.name);
    console.log(e.massage);
    console.log('양의정수를 입력하세요');
}

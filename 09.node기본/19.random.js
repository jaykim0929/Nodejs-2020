const myModule = require('./19.module');

for (let i=0; i<5; i++) {
    console.log(myModule.area(myModule.randInt(1, 5)));
}
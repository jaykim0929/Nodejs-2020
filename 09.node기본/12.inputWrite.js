//node this.js filename

const fs = require('fs');
const readline = require('readline');

//filename 받는 방법
if (process.argv.length < 3) {
    console.log('사용법: node this.js filename');
    process.exit();
}
let filename = process.argv[2];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('> ');
rl.prompt();

let input = '';
rl.on('line', function(buf) {
    input += buf + '\n';
    rl.prompt();
});
rl.on('close', function() {
    fs.writeFile(filename, input, error => {
        if (error)
            console.log(error);
    });
});
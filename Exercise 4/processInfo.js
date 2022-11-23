
// simple rappel de fonctionnalité process

const fs = require("fs");
const writeFileStream = fs.createWriteStream('./commonFile')
//process.ENV évidemment 

//permet de retranscrire l'input (type stream) dans un fichier

process.stdin.on("data", pipeToWriteStream);

function pipeToWriteStream(input){

    /*console.log(input);
    console.log(input.toString());
    console.log(typeof input.toString());
    console.log(input.toString().trim() === 'end');*/

    if(input.toString().trim() === 'end'){
        process.stdin.destroy()
        //process.exit();

    }
    else {
        writeFileStream.write(input);
    }
   
}

// Sort un output/une erreur (stream) 
process.stdout.write('bonjour \n', () => console.log('stream to output'))
process.stderr.write('err \n', () => console.log('stream error'))

//Gérer les sorties de process
function beforeExitCallback(code){
    console.log('About to exit with code '+ code);
    setTimeout(() => console.log('Last async action !'), 1000);

    setTimeout(() => process.exit(),1500);
}

function exitCallback(code){
    console.log('Exit now with code '+ code);
}

process.on("beforeExit",beforeExitCallback);
process.on("exit",exitCallback);


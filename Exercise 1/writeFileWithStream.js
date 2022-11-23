const stream = require('stream');
const fs = require('fs');

class GeneratedDataStream extends stream.Readable {

    constructor(iterationNumber) {
        super();
        this._iterationNumber = parseInt(iterationNumber);
        this._index = 0;
      }
      _read() {
        const i = this._index++;
        if (i > this._iterationNumber)
        //stop le processus
          this.push(null);
        else {
          const string = ' ' + Math.round(Math.random()*10);
          const buffer = Buffer.from(string);
          this.push(buffer);
        }
      }
}

//génère notre stream (normalement itération = 100000000 mais dure 4min)
const dataStream = new GeneratedDataStream(100000);

// dirirge l'écriture vers bifFile
const writeStream = fs.createWriteStream('./bigFile');

// la méthode pipe va chainer les stream les uns après les autre
// afin de pouvoir convertir le readable en writable
dataStream.pipe(writeStream);

function callback(startDate) {
    return () => console.log('Process \'bigFile\' terminé, durée ' + (Date.now() - startDate) + ' ms.')
  }

// écouter le finish
writeStream.on('finish', callback(Date.now()));
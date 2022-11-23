const fs = require('fs');
const path = './bigFile';

function readAndDisplayProgress(err, stats) {
    const stream = fs.createReadStream(path);
    stream.on("data", () => console.log('Lu ' + stream.bytesRead / stats.size * 100 + '%'));
} 

// fs.stat premet de récupérer la taille total du fichier graçe à stats.size
// fs.stat(path, (err, stats) => {});
fs.stat(path, readAndDisplayProgress);
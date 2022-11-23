const fs = require('fs');

function generateData() {
    let data = ' ';
    for (i=0; i < 100; i++) {
        data = data + Math.round(Math.random()*10) +' ';
    }
    return data;
};


function callback() {
    console.log('Process \'bigFile\' terminé, durée ' + (Date.now() - date) + ' ms.')
};

const date = Date.now();

//le callback s'execute quand la requete est terminée
fs.writeFile('bigFile', generateData(), () => callback());

// si le ficher n'exsite pas par exemple, retourne une erreur
fs.readFile('bigFile', (err, data) => {
    if (err) {
        throw new Error('Erreur détectée.')
    }
    console.log(data)
});
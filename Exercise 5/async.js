const fs = require('fs');

function asyncData(callback){
    setTimeout(() => callback('bonjour'), 1000)
}

exports.asyncData = asyncData;
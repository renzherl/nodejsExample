var filestream = require('fs')
filestream.readFile('input.txt', 'utf-8', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log('End!')

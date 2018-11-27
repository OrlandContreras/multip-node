const fs = require('fs');

let createFile = ( base, limit = 10 ) => {
    return new Promise( (resolve, reject) => {
        
        if( !Number(base)){
            reject('the base variable isnt a number!');
            return
        }
        
        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;    
        }
        
        fs.writeFile(`tables/table-${ base }.txt`, data, (err) => {
            if (err) {
               reject (err); 
            }else{
                resolve(`table-${ base }.txt`);
            }           
        });
    } )
}

let viewTable = (base, limit = 10) => {
    return new Promise ( (resolve, reject) => {
        if( !Number(base)){
            reject('the base variable isnt a number!');
            return
        }

        if( !Number(limit)){
            reject('the limit variable isnt a number!');
            return
        }

        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;    
        }
        resolve(data);
    });
}

module.exports = {
    createFile,
    viewTable
}


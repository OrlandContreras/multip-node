// requireds
//const fs = require('fs');
// import fs, { writeFile } from 'fs'; // No es soportado por defecto.
const { createFile, viewTable } = require('./multip/multip');
const argv = require('./config/yargs').argv;

/*let argv = process.argv;
let param = argv[2];
let base = param.split('=')[1];*/

let command = argv._[0];

switch (command) {
    case 'create':
            createFile(argv.base, argv.limit)
            .then( file => console.log(`The file ${ file } has been created!`))
            .catch(err => console.log(err));
        break;
    case 'view':
            viewTable(argv.base, argv.limit)
            .then( table => console.log(table))
            .catch(err => console.log(err));
        break;
    default:
        break;
}


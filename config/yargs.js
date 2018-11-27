const opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10      
    }
}
const argv = require('yargs')
        .command('create', 'Create file with the table of multip', opts)
        .command('view', 'Print table of multip', opts)
        .help()
        .argv;

module.exports = {
    argv
}
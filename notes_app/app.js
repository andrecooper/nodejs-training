const chalk = require('chalk');
const yargs = require('yargs/yargs')(process.argv.slice(2));
const notes = require('./notes');

yargs
    .command({
        command: 'add',
        describe: 'adds a new note',
        builder: {
            title: {
                describe: 'title of the note',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'body of the note',
                demandOption: true,
                type: 'string'
            }
        },
        handler: argv => notes.addNotes(argv.title, argv.body)
    })
    .command({
        command: 'read',
        describe: 'reading the note',
        builder: {
            title: {
                describe: 'title of the note',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => notes.readNote(argv.title)
    })
    .command({
        command: 'remove',
        describe: 'remove a new note',
        builder: {
            title: {
                describe: 'title of the note',
                demandOption: true,
                type: 'string'
            }
        },
        handler: argv => notes.removeNotes(argv.title)
    })
    .command({
        command: 'list',
        describe: 'adds a new note',
        handler: () => notes.listNotes()
    })
    .parse();

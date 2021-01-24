const chalk = require('chalk');
const fs = require('fs')

const DATA_PATH = 'notes.json';

const listNotes = () => {
    let notes = loadNotes();
    console.log(chalk.green.bold('List of your notes:'))
    notes.forEach(note => {
        console.log(`\t${chalk.blue(`title`)}: ${note.title} \t${chalk.blue(`body`)}: ${note.body}`);
    })
}

const readNote = (title)=> {
    const loadedNotes = loadNotes();
    const note = loadedNotes.find(note => note.title === title);
    if (!note){
        console.log(`${chalk.red.bold(`[ERROR]`)}: note '${title}' not found.`);
        return;
    }
    console.log(`\t${chalk.blue(`title`)}: ${note.title} \t${chalk.blue(`body`)}: ${note.body}`);
}

const addNotes = (title, body) => {
    const loadedNotes = loadNotes();
    const dup = loadedNotes.find(note => note.title === title);

    if (!dup) {
        loadedNotes.push({
            title: title,
            body: body
        })
        saveNotes(loadedNotes);

        console.log(`${chalk.bold.green('Added new note:')}`)
        console.log(`\t${chalk.blue('Title')}: ${title}`)
        console.log(`\t${chalk.blue('Body')} ${body}`)
    } else {
        console.log(`${chalk.yellow.bold('[WARN]:')} tried to add duplicate '${title}'`)
    }

}

const removeNotes = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title)
    if (notes.length > filteredNotes.length) {
        console.log(`${chalk.bold.green('Removed  note:')}`)
        console.log(`\t${chalk.blue('Title')}: ${title}`)
        saveNotes(filteredNotes)
    } else {
        console.log(`${chalk.yellow.bold('[WARN]:')} nothing to remove.`)
    }
}

const saveNotes = (notesArr) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(notesArr))
}

const loadNotes = () => {
    if (fs.existsSync(DATA_PATH)) {
        try {
            let buffer = fs.readFileSync(DATA_PATH);
            return JSON.parse(buffer.toString());
        } catch (e) {
            console.log(`${chalk.red.bold('[ERROR] LoadNotes')}: ${e}`)
        }

        return [];
    }

}

module.exports = {
    listNotes: listNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    readNote: readNote
}
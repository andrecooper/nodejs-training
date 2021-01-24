const fs = require('fs')

// const book = {
//     title: 'Title of the book',
//     author: 'Ryan Rainolds'
// }
//
// const booksJson = JSON.stringify(book);
// console.log(`json book: ${booksJson}`)
// const bookParsed = JSON.parse(booksJson)
// console.log(`parsed json: ${bookParsed.author}`)


const data_path = "1-data.json";
const dataFile = fs.readFileSync(data_path);
const parsedData = JSON.parse(dataFile.toString());

parsedData.name="Andrey"
parsedData.age = 34


fs.writeFileSync(data_path, JSON.stringify(parsedData))

/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
const database = 'CurriculumsVitae';
const collection = 'Curriculums';
// Create a new database.
use(database);
// Create a new collection.
db.createCollection(collection);

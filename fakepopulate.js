/*
to populate a file you must first bring in fs
then you bring in the file you need to populate
create a variable to store the files contents in.
read the files with a function

then you make a function that reads the files and syncs them to your db
then save the contents of the file as a variable to parse with json.
return the saved contents as the variable of cached posts

then you make a function to populate the files
this function takes the variable you cached the files in
then create a promise that maps over each individual file data as a new instance of the files data (the model const) and saves them to the db.
then return all promises

invoke the populate function at the end and module exports that whole shabang as separate functions
*/


const fs = require('fs');
const files = require('./files');

let savedFile = null;

const readTheFiles = () => {
  if (!savedFile) {
    const contents = fs.readFileSync('files', 'utf8');
    savedFile = JSON.parse(contents);
  }
  return savedFile;
};

const populateFiles = () => {
  const read = readTheFiles();
  const promises = read.map(p => new files(p).save());
  return Promise.all(promises);
};

// configured the boilerplate code for a population of dummy data
module.exports = {
  readTheFiles,
  populateFiles
};

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
var command = argv._[0]

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note created');
    notes.logNote(note)
  } else {
    console.log('note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
   var note = notes.readNote(argv.title)
  if (note) {
    console.log('Note Read');
    notes.logNote(note)
  } else {
    console.log('note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? "Note was removed" : "Note not found"
  console.log(message);
} else {
  console.log('Command not found');
}

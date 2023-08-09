// Load require modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./public/uuid');
const app = express();
const port = 3001;

// Set the path for static assets (CSS and front-end JS)
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON requests
app.use(express.json());

// Define the path to the notes JSON file
const notesFile = path.join(__dirname, 'db', 'db.json');

// Function to read notes from the file
function readNotesFromFile() {
  try {
    const data = fs.readFileSync(notesFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Function to save notes to the file
function saveNotesToFile(notes) {
  fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2), 'utf8');
}

// Get all notes
app.get('/api/notes', (req, res) => {
  const notes = readNotesFromFile();
  res.json(notes);
});

// Create a new note
app.post('/api/notes', (req, res) => {
  const { title, text, id2 } = req.body;
  const notes = readNotesFromFile();
  const newNote = { title, text, id2: uuid() };
  notes.push(newNote);
  saveNotesToFile(notes);
  res.status(201).send();
});
// DELETE endpoint to delete a specific note
app.delete('/api/notes/:id2', (req, res) => {
  const notes = readNotesFromFile();
  const noteId = req.params.id2;
  const updatedNotes = notes.filter(note => note.id2 !== noteId);
  saveNotesToFile(updatedNotes);
  res.json({ message: 'Note deleted successfully' });
});
// Define routes for the landing page and notes page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

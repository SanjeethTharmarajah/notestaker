// Get references to the necessary elements
const notesListElement = document.querySelector('.notes-list');
const noteTitleElement = document.getElementById('noteTitle');
const noteTextElement = document.getElementById('noteText');
const saveNoteButton = document.getElementById('saveNote');
const newNoteButton = document.getElementById('newNote');
const noteForm = document.getElementById('notefrm');
const noteElement = document.getElementById('notesbox');
// Function to display existing notes
async function displayNotes() {
  try {
    const response = await fetch('/api/notes');
    const notes = await response.json();

    // Clear the notes list before adding the updated notes
    notesListElement.innerHTML = '';

    notes.forEach((note) => {
      const noteItem = document.createElement('div');
      const deleteButton = document.createElement('button');
      noteItem.className = 'note-item';
      deleteButton.className = 'deletebtn';
      deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
      deleteButton.setAttribute("data-id2", note.id2);
      noteItem.textContent = note.title;
      noteItem.addEventListener('click', () => {
        showNoteDetails(note);
      });
      deleteButton.addEventListener('click', (event) => {
        deleteNote(event,deleteButton.dataset.id2);
      });
      notesListElement.appendChild(noteItem);
      notesListElement.appendChild(deleteButton);
    });
  } catch (error) {
    console.error('Error fetching notes:', error);
  }
}

// Function to show note details in the right-hand column
function showNoteDetails(note) {
  noteForm.style.display = "none";
  noteElement.style.display = "block";
  noteElement.innerHTML = '<br><br><span style="background-color:#333; color:white; padding:25px; margin:25px; border-radius:5px;"><b>Title: </b>' + note.title + '</span><br><br><div style="background-color:#ccc; color:black; padding:25px; margin:25px; border-radius:5px;"><b>Description: </b><br><br>' + note.text + '</div>';
}

// Function to save a new note
async function saveNote() {
  if(noteTitleElement.value != "" && noteTextElement.value != ""){
    const newNote = {
      title: noteTitleElement.value,
      text: noteTextElement.value,
    };
  
    try {
      await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });
      // Clear the note fields after saving
      noteTitleElement.value = '';
      noteTextElement.value = '';
      // Refresh the notes list to show the new note
      displayNotes();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  }
}
// Function to delete a note
async function deleteNote(event2,noteId) {
  event2.stopPropagation();
  // Send a DELETE request to the server to delete the note with the given ID
  fetch(`/api/notes/${noteId}`, {
      method: 'DELETE'
  })
      .then(response => {
          if (response.ok) {
              // Refresh the notes list and clear the right-hand column
              window.location.reload();
          } else {
              console.error('Failed to delete note:', response.status);
          }
      })
      .catch(error => console.error('Error deleting note:', error));
      newNote();
}
//shows new note and clears text
function newNote() {
  noteForm.style.display = "block";
  noteElement.style.display = "none";
  noteTitleElement.value = "";
  noteTextElement.value = "";
}
// Event listener for the Save button
saveNoteButton.addEventListener('click', saveNote);
newNoteButton.addEventListener('click', newNote);
// Load existing notes when the page is first opened
displayNotes();

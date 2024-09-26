// Add event listener to the submit button
document.getElementById('add-note-btn').addEventListener('click', addNote);

// Function to add a new note
function addNote() {
  const noteInput = document.getElementById('note-input');
  const noteText = noteInput.value.trim();

  if (noteText !== "") {
    const notesContainer = document.getElementById('notes-container');

    // Create a new note card
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');
    noteCard.textContent = noteText;

    // Append the note card to the container
    notesContainer.appendChild(noteCard);

    // Clear the input field after adding the note
    noteInput.value = '';
  }
}

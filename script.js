// DOM 
const homeBtn = document.getElementById("homeBtn");
const notesBtn = document.getElementById("notesBtn");
const archivesBtn = document.getElementById("archivesBtn");
const settingsBtn = document.getElementById("settingsBtn");

// loading notes from the local storage
let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || []; //getting or setting a mother array
  const notesList = document.querySelector('#notesList');
window.onload = renderNotes(); // notes will be randered in the preview after window loads



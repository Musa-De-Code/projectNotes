// DOM 
const homeBtn = document.getElementById("homeBtn");
const notesBtn = document.getElementById("notesBtn");
const archivesBtn = document.getElementById("archivesBtn");
const settingsBtn = document.getElementById("settingsBtn");
// page navigation
homeBtn.addEventListener('click', function(){
  pageNavigation("homePage", "homeBtn")
  })
notesBtn.addEventListener('click', function(){
  pageNavigation("notesPage", "notesBtn")
  })
archivesBtn.addEventListener('click', function(){
  pageNavigation("archivesPage", "archivesBtn")
  })
settingsBtn.addEventListener('click', function(){
  pageNavigation("settingsPage", "settingsBtn")
  })

// loading notes from the local storage
let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || []; //getting or setting a mother array








//  const notesPageContainer = document.querySelector('#notesPageContainer');
//window.onload = createNoteCards(); // notes will be randered in the preview after window loads

// page navigation


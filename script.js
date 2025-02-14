// DOM 
const homeBtn = document.getElementById("homeBtn");
const notesBtn = document.getElementById("notesBtn");
const archivesBtn = document.getElementById("archivesBtn");
const settingsBtn = document.getElementById("settingsBtn");
const createBtn = document.getElementById("createBtn");
const noteEditBoxSaveBtn = document.getElementById("noteEditBoxSaveBtn");
const noteEditBoxDeleteBtn = document.getElementById("noteEditBoxDeleteBtn");
const forceClearAll = document.getElementById("forceClearAll")
const notesPageContainer = document.getElementById("notesPageContainer")

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

// rendering notes in notes page
renderNotes()











let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];
console.log(NoteKeeper)

















//butten functions
//open note edit box 
createBtn.addEventListener('click', createNewNote)
//saving note from noteeditbox
noteEditBoxSaveBtn.addEventListener('click', saveNotes)
//delete note in editor
document.getElementById("noteEditBoxCloseBtn").addEventListener('click', ()=>{
  document.getElementById('blurOverlay').style.display='none';
})
//delete a single note
noteEditBoxDeleteBtn.addEventListener('click', (deleteNote))
//delete all data
forceClearAll.addEventListener('click', forceClearAllDAta)

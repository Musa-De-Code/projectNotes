// DOM 
const homeBtn = document.getElementById("homeBtn");
const notesBtn = document.getElementById("notesBtn");
const archivesBtn = document.getElementById("archivesBtn");
const settingsBtn = document.getElementById("settingsBtn");
const createBtn = document.getElementById("createBtn");
const noteEditBoxSaveBtn = document.getElementById("noteEditBoxSaveBtn")

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
//let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];
  





//existing note editor
const notesPreview = document.querySelectorAll(".notesPageNotes");

notesPreview.forEach(note=>{
  note.addEventListener('click', ()=>{
    console.log('hihihihih')
    document.getElementById("blurOverlay").style.display='block';
    document.getElementById("noteEditBox").style.display='block';
    //getting the notes
    NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper"))

 //   const noteId = notesPageNotes.dataset.noteId;
   // console.log(noteId)
 //   const noteId = notesPageNotes.dataset.noteId;

    titleInput.value= NoteKeeper[0]
    bodyInput.value= NoteKeeper[7]
  //  console.log(noteId)
  })
});












//  const notesPageContainer = document.querySelector('#notesPageContainer');
//window.onload = createNoteCards(); // notes will be randered in the preview after window loads

// page navigation

//butten functions
//open note edit box 
createBtn.addEventListener('click', createNewNote)
//saving note from noteeditbox
noteEditBoxSaveBtn.addEventListener('click', saveNotes)
//delete note in editor
document.getElementById("noteEditBoxCloseBtn").addEventListener('click', ()=>{
  document.getElementById('blurOverlay').style.display='none';
})
//delete all data
document.getElementById("forceClearAll").addEventListener('click', forceClearAllDAta)

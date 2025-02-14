//function to navigate through diffarent pages
function pageNavigation(currentPage, currentButton){
  let pages = ["homePage", "notesPage", "archivesPage", "settingsPage"]
  pages.forEach(page => {
      if (page === currentPage ) {
          document.getElementById(currentPage).style.display='block';
      }
      else{
        document.getElementById(page).style.display='none';
      } 
  });
  // this is for the clicked btn to be modified
  let buttons = ["homeBtn", "notesBtn", "archivesBtn", "settingsBtn"]
  buttons.forEach(button => {
      if (button === currentButton ) {
          document.getElementById(currentButton).style.border='1px solid #888';
          document.getElementById(currentButton).style.borderLeft='none';
          return
 //         document.getElementById(currentButton).style.backgroundColor='#3530308a';
      }
      else{
        document.getElementById(button).style.border='none';
 //       document.getElementById(currentButton).style.backgroundColor='#E0E0E0';
      }
  });
}

//function to create note cards for the notes page
function renderNotes(){
  const notesPageContainer = document.getElementById("notesPageContainer");
  notesPageContainer.innerHTML = ""; //clear previous content

  //getting notes from local
  const NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];
  let index = 0;//
  NoteKeeper.forEach((note) => { //updating the previiew
    const notesPageNotes = document.createElement("div");
    notesPageNotes.classList.add('notesPageNotes');
    notesPageNotes.dataset.noteIndex = index; //storing index in divs so later get it

    //creating a div to store actual content
    const notesContent = document.createElement("div");
    notesContent.classList.add('notesContent');

    //updating it to notes preview
    const title = document.createElement('h3') //title
    title.classList.add('notesContentTitle')
    title.textContent= note.title;
    const body = document.createElement('p') //body
    body.classList.add('notesContentBody')
    body.textContent= note.body;

    notesContent.appendChild(title) //pushing them to the parent
    notesContent.appendChild(body)

      //append them to parent
    notesPageNotes.appendChild(notesContent)
    //notesPageNotes.appendChild(createNoteCardsMenu)
    notesPageContainer.prepend(notesPageNotes) // add to the start of the div
    index++;
  });
}

//function to ocreate a new note
function createNewNote(){
  document.getElementById("blurOverlay").style.display='block';
  document.getElementById("noteEditBox").style.display='block';
  document.getElementById("bodyInput").focus();
}

//save notes
function saveNotes(){
  const noteId = crypto.randomUUID()
  const createAt = new Date().toISOString()
  const title = document.getElementById("titleInput").value
  const body = document.getElementById("bodyInput").value

  let note = {
    "noteId": noteId,
    "createdAt": createAt,
    "title": title,
    "body": body 
  }
  if (title.trim() ==="" && body.trim() ===""){
    document.getElementById('blurOverlay').style.display='none';
  }
  else{
    const NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];
    NoteKeeper.push(note)
    localStorage.setItem("NoteKeeper", JSON.stringify(NoteKeeper));
    renderNotes()
    document.getElementById("titleInput").value = "";
    document.getElementById("bodyInput").value = "";
    document.getElementById('blurOverlay').style.display='none';
    pageNavigation("notesPage", "notesBtn") // natigate to notes page
  }
}























//function to close notesEditor clicking anywhere outside of the box
  function closeNoteEditor(){
    if(noteEditBox && !noteEditBox.contains(event.target)){
      document.getElementById('blurOverlay').style.display='none';
  } 
} 

// function to delete a single note
function deleteNote(){
  let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper"))
  let index = (event.currentTarget.dataset.noteIndex);//undefined
  console.log(NoteKeeper)
  console.log(index)
  if (confirm("delete current note!")){ 
    NoteKeeper.splice(index, 1);
    localStorage.setItem("NoteKeeper", JSON.stringify(NoteKeeper))
  //localStorage.removeItem(NoteKeeper[index]); // spacific removal
  alert(`Note deleted successfully.`);
  document.getElementById('blurOverlay').style.display='none';
  renderNotes()
  
  }

}

//function to force clear all data
  function forceClearAllDAta(){ 
    if (confirm("delete all data!")){
        localStorage.clear();
    alert("Data Nuked successfully.");
    window.location.reload();
    }
}

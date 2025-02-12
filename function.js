// Function to render notes
function renderNotes() {  
  notesList.innerHTML = ''; // Clear existing list items
  NoteKeeper.forEach(note => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${note.title}</strong><br>${note.body.slice(0, 50)}...`; // Show first 50 characters of content as a preview
    notesList.appendChild(li);
  });
}

// function to save notes
document.getElementById("saveBtn").addEventListener('click', saveNote)
function saveNote(){
  const noteId = crypto.randomUUID(); 
  const creationDate =  new Date();
  const noteTitle = document.getElementById("titleInput").value;
  const noteBody = document.getElementById("bodyInput").value;
  const notes = {   //storing data in object
      id: noteId,
      createdAt: creationDate,
      title: noteTitle,
      body: noteBody
  }
  noteTitle.value = "";    
  noteBody.value = "";   
  NoteKeeper.push(notes);   
  localStorage.setItem("NoteKeeper", JSON.stringify(NoteKeeper)); 
}

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
 //         document.getElementById(currentButton).style.backgroundColor='#3530308a';
      }
      else{
        document.getElementById(button).style.border='none';
 //       document.getElementById(currentButton).style.backgroundColor='#E0E0E0';
      }
  });
}

// function to delete a single note
function deleteNote(){
  if (confirm("delete all data!")){ 
  localStorage.removeItem(""); // spacific removal
  alert("Note deleted successfully.");
  window.location.reload(); // refresh the page
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

//function to create note cards for the notes page
function createNoteCards(){
  const notesPageContainer = document.getElementById("notesPageContainer");
  //notes = getNotes()
  const notesPageNotes = document.createElement("div");
  notesPageNotes.classList.add('notesPageNotes');
  
  //creating a div to store actual content
  const notesContent = document.createElement("div");
  notesContent.classList.add('notesContent');

  //updating it to notes preview
  const title = document.createElement('h3') //title
  title.classList.add('notesContentTitle')
  title.textContent= "";
  const body = document.createElement('p') //body
  body.classList.add('notesContentBody')
  body.textContent= "";

  notesContent.appendChild(title) //pushing them to the parent
  notesContent.appendChild(body)
    //creating another div to store mwta-data
  const notesMetaData = document.createElement("div");
  notesMetaData.classList.add('notesMetaData');

    //append them to parent
  notesPageNotes.appendChild(notesContent)
  notesPageNotes.appendChild(notesMetaData)
  notesPageContainer.appendChild(notesPageNotes)
} 

//function to open noteEditor, saveNotes, closeEditor
function openNoteEditor(){
  document.getElementById("blurOverlay").style.display='block';
  document.getElementById("noteEditBox").style.display='block';
  document.getElementById('blurOverlay').addEventListener('click', closeNoteEditor);
}

//function to close notesEditor clicking anywhere outside of the box
  function closeNoteEditor(){
    if(noteEditBox && !noteEditBox.contains(event.target)){
      document.getElementById('blurOverlay').style.display='none';
  } 
} 

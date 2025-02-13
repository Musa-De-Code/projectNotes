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
createNoteCards()
//function to create note cards for the notes page
function createNoteCards(){
  const notesPageContainer = document.getElementById("notesPageContainer");
  notesPageContainer.innerHTML = ""; //clear previous content

  //getting notes from local
  NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];
  NoteKeeper.reverse()
  NoteKeeper.forEach((note) => { //updating the previiew
    const notesPageNotes = document.createElement("div");
    notesPageNotes.classList.add('notesPageNotes');
    
    //creating a div to store actual content
    const notesContent = document.createElement("div");
    notesContent.classList.add('notesContent');

    //updating it to notes preview
    const title = document.createElement('h3') //title
    title.classList.add('notesContentTitle')
    title.textContent= `${note.title}`;
    const body = document.createElement('p') //body
    body.classList.add('notesContentBody')
    body.textContent= `${note.body}`;

    notesContent.appendChild(title) //pushing them to the parent
    notesContent.appendChild(body)

      //append them to parent
    notesPageNotes.appendChild(notesContent)
    //notesPageNotes.appendChild(createNoteCardsMenu)
    notesPageContainer.appendChild(notesPageNotes)
  });
}

 /*   //creating another div for the menu
  const createNoteCardsMenu = document.createElement("div");
  createNoteCardsMenu.classList.add('createNoteCardsMenu');
  // Button labels
  const buttons = ['Save', 'Delete', 'Close', 'Favorite', 'Pin', 'Archive', 'Lock'];
  // Loop through the button names and create buttons
  buttons.forEach((btnText) => {
    const button = document.createElement('button');

    button.classList.add("createNoteCardsBtn");
    button.id=`${btnText}`;
    button.style.padding = '5px 10px';
    button.style.cursor = 'pointer';
    button.onclick = () => alert(`${btnText} button clicked!`); // Example click event
    createNoteCardsMenu.appendChild(button);
  });
  // Append menuDiv to the document body or a specific container
  notesPageNotes.appendChild(createNoteCardsMenu);

*/







//function to open noteEditor, saveNotes, closeEditor
function openNoteEditor(){
  document.getElementById("blurOverlay").style.display='block';
  document.getElementById("noteEditBox").style.display='block';
}

//save notes
function saveNotes(){
  const noteId = crypto.randomUUID()
  const createAt = new Date().toISOString()
  const title = document.getElementById("titleInput").value
  const body = document.getElementById("bodyInput").value

  let note = {
    "note Id": noteId,
    "created at": createAt,
    "title": title,
    "body": body 
  }
  if (title ==="" && body ===""){
    document.getElementById('blurOverlay').style.display='none';
  }
  else{
    NoteKeeper.push(note)
    localStorage.setItem("NoteKeeper", JSON.stringify(NoteKeeper));
    createNoteCards()
    titleInput.value = "";
    bodyInput.value = "";
    document.getElementById('blurOverlay').style.display='none';
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
  if (confirm("delete current note!")){ 
  localStorage.removeItem(""); // spacific removal
  alert("Note deleted successfully.");
  document.getElementById('blurOverlay').style.display='none';
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

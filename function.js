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
function renderotes(){
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
  let index = document.getElementById("noteEditBox").dataset.editIndex;
  const title = document.getElementById("titleInput").value.trim();
  const body = document.getElementById("bodyInput").value;

  if (title === "" && body === ""){
     document.getElementById('blurOverlay').style.display='none';
     return;
  }

  let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];

  if (index !== undefined && index !== "") {
     // Editing an existing note
     NoteKeeper[index].title = title;
     NoteKeeper[index].body = body;
  } else {
     // Creating a new note
     const noteId = crypto.randomUUID();
     const createdAt = new Date().toISOString();
     NoteKeeper.push({ noteId, createdAt, title, body });
  }

  localStorage.setItem("NoteKeeper", JSON.stringify(NoteKeeper));
  renderNotes();

  // Reset input fields and hide editor
  document.getElementById("titleInput").value = "";
  document.getElementById("bodyInput").value = "";
  document.getElementById('blurOverlay').style.display='none';
  document.getElementById("noteEditBox").dataset.editIndex = ""; // Reset edit index
}








function renderNotes(filtered = null) {
  const notesPageContainer = document.getElementById("notesPageContainer");
  notesPageContainer.innerHTML = ""; // Clear previous content

  // Getting notes from local storage
  const NoteKeeper = filtered || JSON.parse(localStorage.getItem("NoteKeeper")) || [];
  let index = 0;

  NoteKeeper.forEach((note) => {
    // Creating the main note container
    const notesPageNotes = document.createElement("div");
    notesPageNotes.classList.add("notesPageNotes");
    notesPageNotes.dataset.noteIndex = index; // Storing index for later use

    // Creating a div to store actual content
    const notesContent = document.createElement("div");
    notesContent.classList.add("notesContent");

    // Title
    const title = document.createElement("h3");
    title.classList.add("notesContentTitle");
    title.textContent = note.title;

    // Body
    const body = document.createElement("p");
    body.classList.add("notesContentBody");
    body.textContent = note.body;

    // Append elements to content container
    notesContent.appendChild(title);
    notesContent.appendChild(body);

    // Append content to the main note container
    notesPageNotes.appendChild(notesContent);
    
    // Add the note to the page
    notesPageContainer.prepend(notesPageNotes);
    
    index++;
  });
}













//existing note editor
notesPageContainer.addEventListener('click', function(e){
  let notesPageNotes = e.target.closest(".notesPageNotes");
  if(!notesPageNotes) return; // Ignore clicks outside of notes
  
  document.getElementById("blurOverlay").style.display='block';
  document.getElementById("noteEditBox").style.display='block';  
    //getting the notes and its index
    const NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];
    let index = notesPageNotes.dataset.noteIndex; // Get index from clicked note
  if (index !== undefined) {
  document.getElementById("noteEditBox").dataset.editIndex = index; // ✅ Store index in `noteEditBox`
    document.getElementById("titleInput").value = NoteKeeper[index].title;
    document.getElementById("bodyInput").value = NoteKeeper[index].body;
  }
})

//function to close notesEditor clicking anywhere outside of the box
  function closeNoteEditor(){
    if(noteEditBox && !noteEditBox.contains(event.target)){
      document.getElementById('blurOverlay').style.display='none';
  } 
} 

// function to delete a single note
function deleteNote(){
  let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper"))
  let index = document.getElementById("noteEditBox").dataset.editIndex;

  if (confirm("delete current note!")){ 
    NoteKeeper.splice(index, 1);
    localStorage.setItem("NoteKeeper", JSON.stringify(NoteKeeper))
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

//function to search notes
function searchNotes() {
  const query = document.getElementById("searchBar").value.trim().toLowerCase();
  let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];
  
  let filteredNotes = NoteKeeper.filter(note => {
      const noteDate = new Date(note.createdAt);
      const noteText = (note.title + " " + note.body).toLowerCase();

      // Check if query matches note content
      if (noteText.includes(query)) return true;

      // Check if query is a specific date (YYYY-MM-DD)
      if (query.match(/^\d{4}-\d{2}-\d{2}$/)) {
          return note.createdAt.startsWith(query);
      }

      // Check if query is a month name (e.g., "January", "Feb")
      const monthNames = [
          "january", "february", "march", "april", "may", "june",
          "july", "august", "september", "october", "november", "december"
      ];
      if (monthNames.includes(query)) {
          return noteDate.toLocaleString('default', { month: 'long' }).toLowerCase() === query;
      }

      // Check if query is a day of the week (e.g., "Monday")
      const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      if (dayNames.includes(query)) {
          return noteDate.toLocaleString('default', { weekday: 'long' }).toLowerCase() === query;
      }

      return false;
  });

  renderNotes(filteredNotes); // Display filtered notes
}

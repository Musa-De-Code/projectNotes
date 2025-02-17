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

//function to ocreate a new note
function createNewNote(){
  document.getElementById("blurOverlay").style.display='block';
  document.getElementById("noteEditBox").style.display='block';  
  document.getElementById("titleInput").value = "";
  document.getElementById("bodyInput").value = "";
  document.getElementById("noteEditBox").dataset.editIndex = "";
  document.getElementById("bodyInput").focus();
}

//save notes
function saveNotes(){
  let index = document.getElementById("noteEditBox").dataset.editIndex;
  const title = document.getElementById("titleInput").value.trim();
  const body = document.getElementById("bodyInput").value;

  if (title.trim() === "" && body.trim() === ""){
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

//function to edit existing note in editor
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
  }}
)

//function to close notesEditor clicking anywhere outside of the box
  function closeNoteEditor(){
    if(noteEditBox && !noteEditBox.contains(event.target)){
      document.getElementById('blurOverlay').style.display='none';
  } 
} 

// function to delete a single note
function deleteNote(){
  let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper"))
  let index = Number(document.getElementById("noteEditBox").dataset.editIndex);

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

//function to close noteEditor
function noteEditBoxClose(){
  document.getElementById('blurOverlay').style.display='none';
}

//function to search notes
function searchNotes() {
  const query = document.getElementById("searchBar").value.trim().toLowerCase();
  let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || [];

  if (!query) return renderNotes(); // Show all notes when search is empty

  let filteredNotes = NoteKeeper.filter(note => 
      (note.title + " " + note.body).toLowerCase().includes(query)
  );

  renderNotes(filteredNotes);
}





//HOMEPAGE functions
//funnction to add task
function addTask(){
  const writeTasks = document.getElementById('writeTasks');
  const task = writeTasks.value.trim();
    
  if(task !== ""){
    let taskStack = JSON.parse(localStorage.getItem("taskStack")) || [];
    const createdAt = new Date().toISOString();
    const taskId = crypto.randomUUID()

    console.log(taskId)


    //storing data in local storage
    let taskData = {taskId, createdAt, task};
    taskStack.push(taskData);
    localStorage.setItem("taskStack", JSON.stringify(taskStack));
    console.log(createdAt);
    renderTasks()
  }  
  writeTasks.value="";
}
  //funnction to render task

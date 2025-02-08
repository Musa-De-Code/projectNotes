// DOM 
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const newBtn = document.getElementById("newBtn");

// loading note from the local storage
let NoteKeeper = JSON.parse(localStorage.getItem("NoteKeeper")) || []; //getting or setting a mother array
  const notesList = document.querySelector('#notesList');
window.onload = renderNotes(); // notes will be randered in the preview after window loads

// Function to render notes
function renderNotes() {  
    notesList.innerHTML = ''; // Clear existing list items
    NoteKeeper.forEach(note => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${note.title}</strong><br>${note.body.slice(0, 50)}...`; // Show first 50 characters of content as a preview
      notesList.appendChild(li);
    });
  }
  



  // 

 // for( let i = 0; i < NoteKeeper.lengt; i++){
   // console.log(NoteKeeper(i));}




// button functiomalities
// save button
saveBtn.addEventListener('click', saveNote)
    function saveNote(){
        const noteId = crypto.randomUUID(); // gurentee uique id
        const creationDate =  new Date();
        const noteTitle = document.getElementById("title").value;
        const noteBody = document.getElementById("body").value;

        const notes = {   //storing data in object
            id: noteId,
            createdAt: creationDate,
            title: noteTitle,
            body: noteBody
        }

        title.value = "";    //clearing the input boxes 
        body.value = "";   
        NoteKeeper.push(notes);    //adding this set of data to array notekeeper
        localStorage.setItem("NoteKeeper", JSON.stringify(NoteKeeper)); //saving the notes in local storage
        renderNotes();
    }
    
//force clear all DataBtn
deleteBtn.addEventListener('click', forceClearAllDAta)
    function forceClearAllDAta(){
        if (confirm("delete all data!")){
            localStorage.clear(); // removes whole data of the site 
        //localStorage.removeItem("NoteKeeper"); // spacific removal
            alert("Data Nuked successfully.");
        }
          console.log(JSON.parse(localStorage.getItem("NoteKeeper")))
    }
window.onload = renderNotes();



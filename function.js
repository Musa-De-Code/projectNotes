// Function to render notes
function renderNotes() {  
    notesList.innerHTML = ''; // Clear existing list items
    NoteKeeper.forEach(note => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${note.title}</strong><br>${note.body.slice(0, 50)}...`; // Show first 50 characters of content as a preview
      notesList.appendChild(li);
    });
  }


  
//force clear all DataBtn
  function forceClearAllDAta(){ 
    if (confirm("delete all data!")){
        localStorage.clear(); // removes whole data of the site 
    //localStorage.removeItem("NoteKeeper"); // spacific removal
    alert("Data Nuked successfully.");
    window.location.reload(); // refresh the page
    }
}
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
const noteEditBoxArchiveBtn = document.getElementById("noteEditBoxArchiveBtn")

// page navigation
homeBtn.addEventListener('click', function(){
  pageNavigation("homePage", "homeBtn")
  // rendering tasks in home page
  })
notesBtn.addEventListener('click', function(){
  pageNavigation("notesPage", "notesBtn")
  renderNotes() // rendering notes in notes page
  })
archivesBtn.addEventListener('click', function(){
  pageNavigation("archivesPage", "archivesBtn")
  })
settingsBtn.addEventListener('click', function(){
  pageNavigation("settingsPage", "settingsBtn")
  })

///DOM home page 
  const addTaskBtn = document.getElementById("addTaskBtn")

  renderTasks()


console.log( JSON.parse(localStorage.getItem("taskStack")))



function renderTasks(){
  const tasksList = document.getElementById('tasksList')//ul
  const taskStack = JSON.parse(localStorage.getItem("taskStack")) || [];
  tasksList.innerHTML = '';
  
  taskStack.forEach(taskData =>{
    const li = document.createElement('li');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const btn = document.createElement('btn');

    btn.classList.add('noteEditBoxBtn');

    if(taskStack.length === 0){
      h3.innerText = 'type and add a tank and enjoy';
    } else{
      h3.innerText = taskData.task;
      btn.innerText= "delete";
    }
    div.appendChild(h3)
    div.appendChild(btn)
    li.appendChild(div)
    tasksList.appendChild(li)

  })







}














//HOMEPAGE BTN
//add task ,,,,,z
addTaskBtn.addEventListener('click', addTask)

//NOTESPAGE BTN
//open note edit box 
createBtn.addEventListener('click', createNewNote)
//saving note from noteeditbox
noteEditBoxSaveBtn.addEventListener('click', saveNotes)
//delete note in editor
noteEditBoxCloseBtn.addEventListener('click', noteEditBoxClose)
//delete a single note
noteEditBoxDeleteBtn.addEventListener('click', deleteNote)
//delete all data
forceClearAll.addEventListener('click', forceClearAllDAta)
//archive btn

//DOM eliments



// page navigation
homeBtn.addEventListener('click', function(){
    pageView("homePage", "homeBtn")
  })
notesBtn.addEventListener('click', function(){
    pageView("notesPage", "notesBtn")
  })
archivesBtn.addEventListener('click', function(){
    pageView("archivesPage", "archivesBtn")
  })
settingsBtn.addEventListener('click', function(){
    pageView("settingsPage", "settingsBtn")
  })

// updating the notes preview

const createBtn = document.getElementById("createBtn")
createBtn.addEventListener('click', createNoteCards)
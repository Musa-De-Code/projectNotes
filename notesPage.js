//DOM eliments
const homeBtn = document.getElementById("homeBtn");
const notesBtn = document.getElementById("notesBtn");
const homePage = document.getElementById("homePage");



// page navigation
homeBtn.addEventListener('click', function(){
    pageView("homePage")
  })
  notesBtn.addEventListener('click', function(){
    pageView("notesPage")
  })
  archivesBtn.addEventListener('click', function(){
    pageView("archivesPage")
  })
  settingsBtn.addEventListener('click', function(){
    pageView("settingsPage")
  })
  
  /*homeBtn.addEventListener('click', function(){
    pageView("homePage")
  })
  */
  //function to navigate through diffarent pages

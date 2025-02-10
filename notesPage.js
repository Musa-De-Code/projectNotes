//DOM eliments
const homeBtn = document.getElementById("homeBtn");
const notesBtn = document.getElementById("notesBtn");
const homePage = document.getElementById("homePage");


homeBtn.addEventListener('click', pageView)

//function to turn on this 
function pageView(){
    pages = ["homePage", "notesPage", "archivePage"]
    for(i=0; i<pages.length ;i++){
        if(pages[i]==="homePage"){
            homePage.style.display='block';
            notesPage.style.display='none';
            console.log("fine part 1")
        }
        else{

        }
    }
}
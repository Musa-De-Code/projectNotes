//DOM eliments




function enableEdit() {
    let note = document.getElementById("noteContent");
    note.contentEditable = true;
    note.focus();
    document.getElementById("clearNote").style.display = "block";
}

function clearNote() {
    document.getElementById("noteContent").innerText = "";
}

function updateClock() {
    document.getElementById("noteClock").innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
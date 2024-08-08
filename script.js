container = document.querySelector(".container")
newNote = document.querySelector(".new-note")
makeNote = document.querySelector(".make-note")

makeNote.addEventListener("click", (e) => {
    container.style.alignItems = "start";
    container.style.width = "700px";
    newNote.hidden = false;
})
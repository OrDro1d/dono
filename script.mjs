const addNoteButton = document.querySelector(".add-note-button");

sessionStorage.setItem()

addNoteButton.addEventListener("click", function() {
    main = document.querySelector("main");
    addNoteForm = document.querySelector(".add-note-form");
    addNoteFormButton = document.querySelector(".add-note-form button");

    main.hidden = true;
    addNoteForm.hidden = false;

    addNoteFormButton.addEventListener("click", function() {
        let newNote = document.createElement("ol"); 
        newNote.innerHTML = document.querySelector(".add-note-form textarea").value;
        localStorage.setItem("Новая заметка", document.querySelector(".add-note-form textarea").value)



        document.querySelector(".add-note-form textarea").value = "";
        document.querySelector(".notes-menu list").appendChild(newNote);

        main.hidden = false;
        addNoteForm.hidden = true;

    });
})
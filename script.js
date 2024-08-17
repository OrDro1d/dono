notesNumber = Number(localStorage.getItem("notesNumber"));

newNote = document.querySelector(".new-note");
makeNote = document.querySelector(".make-note");
newNoteText = document.querySelector(".new-note-text");

makeNote.addEventListener("click", e => {
	document.body.style.alignItems = "start";
	newNote.hidden = false;
	makeNote.innerHTML = "✔️ Создать заметку";

	makeNote.addEventListener("click", e => {
		if (newNoteText.value != "") {
			console.log('"a"' + newNoteText.value + '"a"');
			notesNumber++;
			sessionStorage.setItem("note" + notesNumber, newNoteText.value);
			createdNote = document.createElement("li");
			createdNote.innerHTML = '<li class="note">' + newNoteText.value + "</li>";
			newNoteText.value = "";
			document.querySelector(".notes").appendChild(createdNote);
		}
	});
});

document.addEventListener("unload", e => {
	localStorage.getItem("notesNumber", String(notesNumber));
});
document.add;

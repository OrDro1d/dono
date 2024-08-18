"use strict";
// Считываем количество заметок и сохраняем это значение
let notesNumber = Number(localStorage.getItem("notesNumber"));
const notesOldNumber = notesNumber;
// Добавляем на страницу заметки созданные ранее
for (let i = 0; i < notesNumber; i++) {
	let createdNote = document.createElement("li");
	createdNote.textContent = localStorage.getItem("note" + i);
	createdNote.classList = "note";
	document.querySelector(".notes").appendChild(createdNote);
}
// Ну тут все и так ясно, m'kay?
const newNote = document.querySelector(".new-note");
const makeNote = document.querySelector(".make-note");
const newNoteText = document.querySelector(".new-note-text");
// Создание заметки по нажатию кнопки
makeNote.addEventListener("click", event => {
	document.body.style.alignItems = "start";
	newNote.hidden = false;
	makeNote.innerHTML = "✔️ Создать заметку";

	makeNote.addEventListener("click", event => {
		if (newNoteText.value != "") {
			let createdNote = document.createElement("li");
			createdNote.textContent = newNoteText.value;
			createdNote.classList = "note";
			document.querySelector(".notes").appendChild(createdNote);

			sessionStorage.setItem("note" + notesNumber, newNoteText.value);
			newNoteText.value = "";

			notesNumber++;
		}
	});
});
// Загрузка заметок в localStorage перед закрытием страницы
window.addEventListener("unload", event => {
	localStorage.setItem("notesNumber", String(notesNumber));
	for (let i = notesOldNumber; i < notesNumber; i++) {
		localStorage.setItem("note" + i, sessionStorage.getItem("note" + i));
	}
});

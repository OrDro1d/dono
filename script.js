"use strict";

let notesNumber = 0;
let notesOldNumber = 0;
// Считываем количество заметок и сохраняем это значение
if (localStorage.length > 1) {
	notesNumber = Number(localStorage.getItem("notesNumber"));
	notesOldNumber = notesNumber;
}
// Добавляем на страницу заметки созданные ранее
for (let i = 0; i < notesNumber; i++) {
	let createdNote = document.createElement("li");
	createdNote.innerHTML =
		"<p>" +
		JSON.parse(localStorage.getItem("note" + i))[0] +
		"</p><p>" +
		JSON.parse(localStorage.getItem("note" + i))[0] +
		"</p>";
	createdNote.classList = "note";
	document.querySelector(".notes").appendChild(createdNote);
}
// Ну тут все и так ясно, m'kay?
const newNote = document.querySelector(".new-note");
const makeNote = document.querySelector(".make-note");
const tips = document.querySelector(".tips");
const newNoteTitle = document.querySelector(".new-note-title");
const newNoteText = document.querySelector(".new-note-text");
const closeButton = document.querySelector(".actions button:nth-child(2)");
// Создание заметки по нажатию кнопки
makeNote.addEventListener("click", event => {
	document.body.style.alignItems = "start";
	newNote.hidden = false;

	makeNote.innerHTML = "✔️ Создать заметку";
	tips.innerHTML =
		'Нажмите на кнопку "Создать заметку", чтобы закончить создание заметки и добавить ее в список';

	makeNote.addEventListener("click", event => {
		if (newNoteText.value != "") {
			let createdNote = document.createElement("li");
			createdNote.innerHTML =
				"<p>" + newNoteTitle.value + "</p><p>" + newNoteText.value + "</p>";

			createdNote.classList = "note";
			document.querySelector(".notes").appendChild(createdNote);

			sessionStorage.setItem(
				"note" + notesNumber,
				JSON.stringify([newNoteTitle.value, newNoteText.value])
			);
			newNoteText.value = "";
			newNoteTitle.value = "";

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

closeButton.addEventListener("click", event => {
	newNote.hidden = true;
	makeNote.innerHTML = "➕ Создать заметку";
});

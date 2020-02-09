function print(value) {
    console.log(value);
    return value;
}

function $(selector) {
    return document.querySelector(selector);
}

const form = $("#new-note");

form.addEventListener("submit", event => {
    event.preventDefault();
    postNewNote(title, noteText);
    console.log("submit button pressed");
    console.log("submit button console: title " + $("#title").value);
    console.log("submit button console: body " + $("#body").value);

    // return false;
});

getAllNotes();

function getAllNotes() {
    return fetch("http://localhost:3000/notes/", {
            method: "GET"
        })
        .then(response => response.json())

    .then(function(data) {
        const list = $("#list");
        const newListItem = document.createElement("li");
        list.appendChild(newListItem);
        newListItem.innerText = data[0].body;

        console.log(data[0].body);
        console.log("get all notes function called");
    });
}

// const nowMoment = moment();

const noteText = $("#body").value;
title = $("#title").value;

postNewNote();

function postNewNote(title, noteText) {
    console.log("postNewNote called");
    fetch("http://localhost:3000/notes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: title,
            body: noteText,
            created: moment().format()
        })

            .then(data => {
                console.log(data);
            })
            .then(res => res.JSON())
    });
}

function postNewNote(titleText, noteText) {
    return fetch("http://localhost:3000/notes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: titleText,
            note: noteText,
            created: moment().format()
        })
    }).then(response => response.json());
    console.log(titleText);
    console.log(noteText);
}
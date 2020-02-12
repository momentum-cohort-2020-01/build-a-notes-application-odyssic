function print(value) {
    console.log(value);
    return value;
}

function $(selector) {
    return document.querySelector(selector);
}

const form = $("#new-note");
const submitButton = $("#submit-button");

form.addEventListener("submit", event => {
    event.preventDefault();
    const title = $("#title").value;
    const body = $("#body").value;
    console.log("submit button pressed");
    console.log("submit button console: title " + title);
    console.log("submit button console: body " + body);
    postNewNote(title, body);
    $("#new-note").reset();

    // return false;
});

const fetchUrl = "http://localhost:3000/notes/"

getAllNotes();

function getAllNotes() {
    fetch(fetchUrl, {
            method: "GET"
        })
        .then(response => response.json())

    .then(function(dataSet) {
        dataSet.map(note => {
            createList(note);
        });
    });
}

const dataSet = {};

function createList(note) {
    const list = $("#list");

    let listItemContainer = document.createElement("div")
    list.appendChild(listItemContainer)

    const newTitle = document.createElement("div");
    const newBody = document.createElement("div");
    const newDate = document.createElement("div");

    titleDiv = listItemContainer.appendChild(newTitle);
    bodyDiv = listItemContainer.appendChild(newBody);
    dateDiv = listItemContainer.appendChild(newDate);

    buttonContainer = document.createElement('div')
    listItemContainer.appendChild(buttonContainer)
    buttonContainer.classList.add('button-container')

    const editButton = document.createElement('button')
    editButton.textContent = 'edit'
    buttonContainer.insertAdjacentElement("beforeEnd", editButton)
    editButton.classList.add('button-edit')

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    buttonContainer.insertAdjacentElement("beforeEnd", deleteButton)
    deleteButton.classList.add('button-delete')

    titleDiv.classList.add('title')
    bodyDiv.classList.add('body')
    dateDiv.classList.add('date')

    newTitle.innerText = `${note.title}`;
    newBody.innerText = `${note.body}`;
    newDate.innerText = `${note.created}`;
}

console.log(moment().format("LLLL"));
const now = moment().format("LLLL");

function postNewNote(title, body) {
    console.log("postNewNote called");
    return fetch(fetchUrl, {

            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                title: title,
                body: body,
                created: moment().format("LLLL")
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.title)

        })
}
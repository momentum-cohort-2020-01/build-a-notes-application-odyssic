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
    postNewNote(title, body);
    console.log("submit button pressed");
    console.log("submit button console: title " + $("#title").value);
    console.log("submit button console: body " + $("#body").value);
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
        dataSet.map(dataSet => {
            createList();
        });
    });
}
const dataSet = {};

function createList() {
    const list = $("#list");
    const newListItem = document.createElement("li");
    list.appendChild(newListItem);
    newListItem.innerText = (dataSet.body, dataSet.title, dataSet.created);
}

const title = $("#title").value;
const body = $("#body").value;
console.log(moment().format("LLLL"));
const now = moment().format("LLLL");

function postNewNote(title, body) {
    console.log("postNewNote called");
    fetch(fetchUrl, {

            method: "POST",
            headers: { "Content-Type": "application/json" },
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
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
        // document.createElement("img");
        // img.src = "trash-can-small.gif";
        // newListItem.insertAdjacentElement(img, "afterend");

        console.log(data[0].body);
        console.log("get all notes function called");
    });
}

// const nowMoment = moment();

const title = $("#title").value;
const body = $("#body").value;
console.log(moment().format("LLLL"));

function postNewNote(title, body) {
    console.log("postNewNote called");
    fetch("http://localhost:3000/notes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: title,
            body: body,
            created: moment().format("LLLL")
        })
    }).then(response => response.json());
}

// .then(res => res.JSON())
// .then(renderedNote => {
//     getAllNotes();
// })
// });
// }

// function postNewNote(titleText, noteText) {
//     return fetch("http://localhost:3000/notes/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             title: titleText,
//             note: noteText,
//             created: moment().format()
//         })
//     }).then(response => response.json());
//     console.log(titleText);
//     console.log(noteText);
// }
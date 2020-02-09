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
    postNewNote();
    console.log("submit button pressed");

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
    });
}

function postNewNote() {
    fetch("http://localhost:3000/notes/", {
            method: "POST",
            body: JSON.stringify({}),
            headers: { "Content-Type": "application/json" }
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(data) {
            console.log(data);
        });
}

// const formData = new FormData();
// const photos = document.querySelector('input[type="file"][multiple]');

// formData.append('title', 'My Vegas Vacation');
// for (let i = 0; i < photos.files.length; i++) {
//     formData.append('photos', photos.files[i]);
// }

// fetch('https://example.com/posts', {
//             method: 'POST',
//             body: formData,

// etch("/echo/json/", {
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify({ a: 1, b: 2 })
//     })
//     .then(function(res) {
//         console.log(res);
//     })
//     .catch(function(res) {
//         console.log(res);
//     });

// note data then index of note then .key

// fetch(url)
//     .then((resp) => resp.json()) // Transform the data into json
//     .then(function(data) {
//         // Create and append the li's to the ul
//     })
// })

// fetch('http://example.com/movies.json')
// .then((response) => {
//     return response.json();
// })
// .then((myJson) => {
//     console.log(myJson);
// });

// fetch('http://localhost:3000/notes/', {
//   method: 'POST',
//   headers: {"Content-Type": "application/json"},
//   body: JSON.stringify({"title": "Hi", "body": "COOL"})
// })
// .then(r => r.json())
// .then(
//   // whatever you need to do next
// )

// function postNewNote(noteText) {
//     return fetch('http://localhost:3000/notes/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             "body": noteText,
//             "created": moment().format()

//         })

//     });
// }\
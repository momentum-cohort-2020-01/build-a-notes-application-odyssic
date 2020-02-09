function print(value) {
    console.log(value);
    return value;
}

function $(selector) {
    return document.querySelector(selector);
}

container.addEventListener("submit", event => {
    event.preventDefault();
    console.log("submit button pressed");
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
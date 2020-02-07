let container = $('#container')

container.addEventListener("submit", function(event) {
    event.preventDefault();
})

function $(selector) {
    return document.querySelector(selector)
}

// function getAllNotes() {
//     fetch('http://localhost:3000/notes/', {
//             method: 'GET'
//         })
//         .then(response => response.json())
// }
// console.log(response)

// // post a note
// fetch('http://localhost:3000/notes/', {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ "title": "Hi", "body": "COOL" })
//     })
//     .then(r => r.json())

fetch('http://localhost:3000/notes/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });
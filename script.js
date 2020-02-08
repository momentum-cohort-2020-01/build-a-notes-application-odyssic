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

fetch("http://localhost:3000/notes/")
    .then(resp => resp.json())
    .then(function(data) {
        let notes = data;
        console.log(data);
    });

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
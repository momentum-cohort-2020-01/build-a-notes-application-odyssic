const noteTextField = $('#note-text')
const noteText = noteTextField.value
noteTextField.value = ''
    // postNewNote(noteText).then(renderNewNote)
})


function $(selector) {
    return document.querySelector(selector)
}

fetch('http://localhost:3000/notes/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
        const noteHTML = createNoteHTML(noteText)
        const noteList = $('#note-list')
        noteList.insertAdjacentHTML('afterend', noteHTML)
    });

// function postNewNote(noteText) {
//     return fetch('http://localhost:3000/notes/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(noteText)
//     });




// }

// function renderNewTodo(todo) {
//     const todoHTML = createTodoHTML(todo)
//     const todosList = document.querySelector('#todos-list')
//     todosList.insertAdjacentHTML('beforeend', todoHTML)
// }

function getAllNotes() {
    return fetch('http://localhost:3000/todos/', {
            method: 'GET'
        })
        .then(response => response.json())
}

let noteHistory = getAllNotes();

function noteHistory() {

    return response;
}





// $('#new-todo-form').addEventListener('submit', event => {
//     event.preventDefault()
//     const todoTextField = q('#todo-text')
//     const todoText = todoTextField.value
//     todoTextField.value = ''
//     postNewTodo(todoText).then(renderNewTodo)
// })

// /clintons example
// function postNewTodo(todoText) {
//     return fetch('http://localhost:3000/todos/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ todo: todoText, done: false, created: moment().format() })
//         })
//         .then(response => response.json())
// }

// RIPPLE EVENTS
//Ripple Event Handler
// var drawRipple = function(ev) {
//     var x = ev.clientX;
//     var y = ev.clientY;
//     var node = document.querySelector(".ripple");
//     var newNode = node.cloneNode(true);
//     newNode.classList.add("animate");
//     newNode.style.left = ev.clientX - 5 + "px";
//     newNode.style.top = ev.clientY - 5 + "px";
//     node.parentNode.replaceChild(newNode, node);
// };

// //Ripple Triggers
// window.addEventListener("click", drawRipple);


// //Control Handler
// var controlHandler = function() {
//     document.body.classList.toggle("dark");
//     if (document.body.classList.contains("dark")) {
//         controller.textContent = "Dark Ripple";
//     } else {
//         controller.textContent = "Bright Ripple";
//     }
// };

// // Control Trigger
// var controller = document.querySelector(".controller");
// controller.addEventListener("click", controlHandler);
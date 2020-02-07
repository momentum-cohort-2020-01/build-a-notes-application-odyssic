let container = $('#container')

container.addEventListener("submit", function(event) {
        event.preventDefault();
    }

    fetch('http://localhost:3000/notes/', {

    })
    .then(r => result.json()) console.log(result)
)

function $(selector) {
    return document.querySelector(selector)
}

function get All getAllNotes() {
    return fetch('http://localhost:3000/notes/', {
            method: 'GET'
        })
        .then(response => response.json())
}


// functions needed: 

// get all notes
// list notes 

// submit note
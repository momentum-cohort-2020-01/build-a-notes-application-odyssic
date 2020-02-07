function print(value) {
    console.log(value)
    return value
}

function $(selector) {
    return document.querySelector(selector)
}


const noteTextField = $("note-text")
noteText = ''
const noteText = noteTextField.value

function postNote() {
    let errorMssg = 'Please enter a note!'
    if (noteText == '') {
        return errorMssg
    } else {
        postNewNote(noteText)
        console.log(noteText)

    }

}


container.addEventListener("submit", event => {
    event.preventDefault()
    postNote()
    console.log('submit button pressed')
})

fetchAndRenderNotes()


const list = $('#list')
const newNote = document.createElement('li')


function fetchAndRenderNotes() {
    fetch('http://localhost:3000/notes/')
        .then((response) => {
            return response.json();

        })
        .then((myNotes) => {
            console.log(myNotes)
            console.log('notes have been fetched!');
            return myNotes;

            // let editButton = document.createElement('img')
            // editButton.src = "vector60-2136-01.jpg"

            list.appendChild(newNote)
            newNote.innerHTML = myNotes.body
            console.log(myNotes.body)

        });
}

function postNewNote(noteText) {
    return fetch('http://localhost:3000/notes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "body": noteText,
            "created": moment().format()

        })

    });
}
function print(value) {
    console.log(value)
    return value
}

container.addEventListener("submit", event => {
    event.preventDefault()
})

// getAllNotes()
// renderNoteList()

const noteList = document.querySelector('#note-list');
const notesForList = document.createElement('ul');

fetch('http://localhost:3000/notes/')
    .then((response) => {
        return response.json();
    })
    .then((myNotes) => {
        console.log(myNotes);


        noteList.appendChild(myNotes.title)


    });





// function renderNoteList() {
//     getAllNotes();

//     const listPlace = document.querySelector('note-list');
//     // const noteList = document.createElement('ul');